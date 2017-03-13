import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';
import { fromJS } from 'immutable';
import { Layout, Content } from 'react-mdl'

import NavigationBar from '../../components/NavigationBar';
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
    const currentContainerHeight = window.innerHeight - 64 - 32;
    this.setState({ height: currentContainerHeight });
  }

  render() {
    const { onLogout, data: { organization } } = this.props;
    const data = organization ? organization.devices : [];
    return (
      <Wrapper>
        <Layout>
          <NavigationBar
            title="Famoco Management Suite"
            onLogout={onLogout}
          />
          <Content component={Container}>
            <InnerContainer className="mdl-card mdl-shadow--2dp">
              <DataTable data={fromJS(data)}/>
            </InnerContainer>
          </Content>
        </Layout>
      </Wrapper>
    );
  }
}

const HomePageQuery = gql`
  query ($organizationId: ID!, $hasSelectedOrganization: Boolean!) {
    currentUser {
      username
      email
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
  fragment DeviceTable on Device {
    id
    famoco_id
    fleet
    profile
    maintenance_status
    heartbeat
    imei
    model
    last_sync
    sync_status
  }
`;

export const AppWithData = graphql(HomePageQuery, {
  options: (props) => ({
    variables: {
      organizationId: 3,
      hasSelectedOrganization: true,
    },
  })
})(HomePage);

export default AppWithData;
// export default HomePage;
