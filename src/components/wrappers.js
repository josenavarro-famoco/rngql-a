import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.div`
  height: 144px;
  background: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  color: white;
  margin: 0 16px 32px;
`;

export const Actions = styled.div`
  margin: 0 16px 32px;
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
  width: 1024px;
  max-width: 1024px;
  background: white;
`;

export const TableWrapper = styled.div`
  & > * {
    width: 100%;
  }
`;

export const TableInnerWrapper = styled.div`
  // max-height: 600px;
  // overflow-y: scroll;
  & > table {
    width: 100%;
  }
`;
