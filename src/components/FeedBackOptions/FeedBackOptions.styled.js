import styled from 'styled-components';

export const Options = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
export const OptionsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 45px;
  padding: 5px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 15px;
  background-image: linear-gradient(
    to right,
    #c2e59c 0%,
    #64b3f4 51%,
    #c2e59c 100%
  );
  background-size: 200% auto;
  transition-property: background-position;
  transition-duration: 550ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: white;
  :hover {
    background-position: right center;
  }
`;
