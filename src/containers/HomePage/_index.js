import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';

import NavigationBar from '../../components/NavigationBar';
import Profile from '../../components/profile';
import DeviceTable from '../../components/deviceTable';
import DataTable from '../../components/DataTable';

import {
  Wrapper,
  Container,
  InnerContainer,
} from './wrappers';

class HomePage extends Component {
  static childContextTypes = {
    height: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  getChildContext() {
    return {
      height: this.state.height,
    };
  }

  componentWillMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.data.loading && this.props.data.loading) {
      console.log('stop loading')
      nextProps.data.updateQuery((previosuResult, variables) => {
        console.log('c', previosuResult)
        console.log('a', variables)
        return ({
          ...previosuResult,
          variable: {
            organizationId: nextProps.data.organizations[0].id,
            hasSelectedOrganization: true,
          }
        })
      })
    }
    if (nextProps.data.variables.hasSelectedOrganization && !this.props.data.variables.hasSelectedOrganization) {
      nextProps.data.refetch()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const currentContainerHeight = window.innerHeight;
    this.setState({ height: currentContainerHeight });
  }

  render() {
    const { onLogout } = this.props;
    return (
      <Wrapper>
        <NavigationBar
          title="Famoco Management Suite"
          onLogout={onLogout}
        />
        <Container>
          <InnerContainer className="mdl-card mdl-shadow--2dp">
            <DataTable />
          </InnerContainer>
        </Container>
      </Wrapper>
    );
  }
}

const HomePageQuery = gql`
  query ($organizationId: ID!, $hasSelectedOrganization: Boolean!) {
    currentUser {
      ...CurrentUser
    }
    organizations {
      id
      name
    }
    organization(id: $organizationId) @include(if: $hasSelectedOrganization){
      id
      name
      devices{
        ...DeviceTable
      }
    }
  }
  ${Profile.fragments.currentUser}
  ${DeviceTable.fragments.table}
`;

export const AppWithData = graphql(HomePageQuery, {
  options: (props) => ({
    variables: {
      organizationId: 3,
      hasSelectedOrganization: false,
    },
  })
})(HomePage);

// export default AppWithData;
export default HomePage;
