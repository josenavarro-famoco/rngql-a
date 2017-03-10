import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import logo from './logo.svg';
import './App.css';
import Profile from './components/profile';
import DeviceTable from './components/deviceTable';

import {
  Wrapper,
  Header,
  Title,
  Actions,
  Container,
  InnerContainer,
} from './components/wrappers';

class App extends Component {
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

  render() {
    const { data } = this.props;
    console.log(this.props.data)
    console.log(this.props.data.error)
    return (
      <Wrapper>
        <Header>
          <Title>
            Famoco Management  Suite
          </Title>
          <Actions>
            Actions
          </Actions>
        </Header>
        <Container>
          <InnerContainer>
            {data.loading && <p>Loading</p>}
            {!data.loading && <Profile currentUser={data.currentUser} />}
            {!data.loading && data.variables.hasSelectedOrganization && <DeviceTable data={data.organization.devices} />}
            {JSON.stringify(data.organizations)}
          </InnerContainer>
        </Container>
      </Wrapper>
    );
  }
}

const HomePage = gql`
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

const AppWithData = graphql(HomePage, {
  options: (props) => ({
    variables: {
      organizationId: 3,
      hasSelectedOrganization: false,
    },
  })
})(App);

export default AppWithData;
