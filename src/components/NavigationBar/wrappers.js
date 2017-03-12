import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 124px;
  background: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  & > * {
    marginBottom: 32px;
    color: white;
  }
`;
