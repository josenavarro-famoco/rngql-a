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
  height: 124px;
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
  width: 100%;
  height: calc(100vh - 124px);
  background: #e0e0e0;
  & .mdl-grid {
    height: 100%;
    padding: 0;
  }
  & .mdl-cell:nth-child(2) {
    margin: 0;
  }
  @media (max-width: 839px) {
    height: calc(100vh - 64px);
    & .mdl-cell:nth-child(2) {
      width: 100%;
    }
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;

  @media (min-width: 840px) {
    margin-top: -32px;
  }
`;
