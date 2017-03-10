import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  height: 124px;
  background: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 32px;
  color: white;
  font-weight: bold;
  margin: 16px;
`;

export const Actions = styled.div`
  margin: 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: auto;
  background: red;
  flex-direction: row;
`;

export const InnerContainer = styled.div`
  margin: -32px auto 32px;
  padding: 16px;
  width: 1024px;
  max-width: 1024px;
  background: white;
`;
