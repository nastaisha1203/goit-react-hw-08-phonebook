import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Username = styled.p`
  font-weight: 700;
`;
export const Button = styled.button`
  background-color: white;
  font-weight: 500;
  padding: 3px 6px;
  border-radius: 4px;
  /* background-color: #d5e1d1; */
  border: solid 1px grey;
  box-shadow: 0 2px 6px rgba(100, 100, 100, 0.2),
    0 11px 15px rgba(100, 100, 100, 0.2);
  &:hover {
    color: #e84a5f;
  }
`;
