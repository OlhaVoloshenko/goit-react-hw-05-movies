import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Item = styled.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ItemLink = styled(Link)`
  color: #0000ff;
  &:active {
    color: #ff0000;
  }
`;

export const Main = styled.main`
  margin-top: 25px;
`;
