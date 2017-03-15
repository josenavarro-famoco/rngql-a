import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 124px;
  background: #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  & > * {
    color: white;
  }

  @media (min-width: 840px) {
    padding-left: calc(8.3333333333%);
  }

  @media (max-width: 839px) {
    height: 64px;
    padding: 0 16px;
  }
`;
