import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';
import { fromJS } from 'immutable';
import { Layout, Content, Grid, Cell } from 'react-mdl'

import NavigationBar from '../../components/NavigationBar';
import DataTable from '../../components/DataTable';

import { ITEMS_PER_PAGE } from '../../constants';

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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const currentContainerHeight = window.innerHeight - 64 - 32;
    this.setState({ height: currentContainerHeight });
  }

  render() {
    console.log(this.props)
    const { onLogout, data: { organization, loading } } = this.props;
    const data = !loading && organization ? organization.devices : { count: 0, results: []};
    return (
      <Wrapper>
        <Layout>
          <NavigationBar
            title="Famoco Management Suite"
            onLogout={onLogout}
          />
          <Container>
            <Grid>
              <Cell col={1} hidePhone hideTablet>
              </Cell>
              <Cell col={10}>
                <InnerContainer className="mdl-card mdl-shadow--2dp">
                  {loading ? <p>loading</p> : <DataTable data={fromJS(data)}/>}
                </InnerContainer>
              </Cell>
              <Cell col={1} hidePhone hideTablet>
              </Cell>
            </Grid>
          </Container>
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
    organization(id: $organizationId) @include(if: $hasSelectedOrganization){
      id
      name
      devices {
        count
        results {
          ...DeviceTable
        }
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
    logs {
      count
      results {
        name
        description
      }
    }
  }
`;

export const AppWithData = graphql(HomePageQuery, {
  options: (props) => ({
    variables: {
      organizationId: 3,
      hasSelectedOrganization: true,
    },
    // props({ data: { loading, currentUser, organization, fetchMore }}) {
    //   return {
    //     loading,
    //     currentUser,
    //     organization,
    //     loadMoreDevices() {
    //       return fetchMore({
    //         variables: {
    //           offset: organization.devices.results.length,
    //         },
    //         updateQuery: (previosuResult, { fetchMoreResult }) => {
    //           if (!fetchMoreResult.data) {
    //             return previosuResult;
    //           }
    //           return Object.assign(
    //             {},
    //             previosuResult,
    //             Object,assign(
    //               {},
    //               previosuResult.organization
    //             )
    //           )
    //         }
    //       })
    //     }
    //   }
    // }
  })
})(HomePage);

export default AppWithData;
// export default HomePage;
