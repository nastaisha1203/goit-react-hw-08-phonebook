import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
export const Number = styled.span`
  margin-left: 10px;
`;
export const Button = styled.button`
  background-color: #d5e1d1;
  border: none;
  padding: 0;

  &:hover {
    color: #e84a5f;
  }
`;
