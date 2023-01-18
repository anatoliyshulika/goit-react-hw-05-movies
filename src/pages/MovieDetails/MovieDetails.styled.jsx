import styled from 'styled-components';

export const Poster = styled.img`
  display: block;
`;

export const PostWrapper = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 4px;

  font-size: 16px;

  cursor: pointer;
  background-color: aqua;

  &:hover {
    background-color: #84d2c5;
  }
`;

export const Description = styled.div`
  margin-left: 30px;
`;

export const Title = styled.div`
  font-weight: 700;
`;

export const Line = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  height: 3px;
  width: 100vw;
  background-color: #84d2c5;
`;
