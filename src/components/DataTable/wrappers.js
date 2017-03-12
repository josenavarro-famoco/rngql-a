import styled from 'styled-components';

export const TableWrapper = styled.div`
  & > * {
    width: 100%;
  }
`;

export const TableInnerWrapper = styled.div`
  max-height: ${props => props.height}px;
  overflow-y: auto;
  & > table {
    width: 100%;
  }
`;
