import { Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const FieldSt = styled(Field)`
  height: 30px;
  width: 200px;
  padding: 0 10px;
  margin-bottom: 15px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: solid 1px #000000;
`;

export const Button = styled.button`
  height: 31.6px;
  width: 60px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: solid 1px #000000;
  border-left: none;

  cursor: pointer;
  background-color: aqua;

  &:hover {
    background-color: #84d2c5;
  }
`;
