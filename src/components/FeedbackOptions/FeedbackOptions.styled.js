import styled from 'styled-components';
export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0px;
`;
export const Li = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 20px;
`;
