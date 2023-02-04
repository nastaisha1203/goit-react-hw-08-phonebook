import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormSection = styled(Form)`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid grey;
  margin: 0 auto;
  margin-bottom: 15px;
  background-color: #5884708f;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(Field)`
  border: none;
`;
export const Button = styled.button`
  padding: 4px 5px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 11px 15px rgba(0, 0, 0, 0.2);
  &:hover {
    color: #e84a5f;
  }
`;
