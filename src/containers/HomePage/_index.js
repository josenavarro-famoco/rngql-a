import React, { Component, PropTypes } from 'react';
import { gql, graphql } from 'react-apollo';
import { Grid, Cell } from 'react-mdl';
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
          <Grid>
            <Cell col={1} hidePhone hideTablet>
              d
            </Cell>
            <Cell col={10} hidePhone hideTablet>
              <InnerContainer className="mdl-card mdl-shadow--2dp">
                adasd
              </InnerContainer>
            </Cell>
            <Cell col={1} hidePhone hideTablet>
              do
            </Cell>
          </Grid>
        </Container>
      </Wrapper>
    );
  }
}

export default HomePage;
