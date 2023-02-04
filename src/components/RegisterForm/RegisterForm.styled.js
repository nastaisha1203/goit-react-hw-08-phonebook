import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  border: solid 2px grey;
  margin: 0 auto;
  padding: 10px 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 500;
`;
export const Button = styled.button`
  font-weight: 500;
  &:hover {
    color: #e84a5f;
  }
`;
