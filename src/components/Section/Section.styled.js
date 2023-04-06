import styled from 'styled-components';

export const Div = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  :not(:last-child) {
    margin-bottom: 30px;
  }
  color: white;
`;

export const Title = styled.h2`
  color: white;
  text-align: center;
`;
