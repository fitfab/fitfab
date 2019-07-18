import styled from "styled-components";

export interface Props {
  width: string;
}

export const Button = styled.button<Props>`
  background: #f90587;
  color: #fff;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  padding: 8px 24px;
  text-transform: uppercase;
  transition: all 0.5s;
  width: ${({ width }) => (width ? width : "100px")};

  &:hover {
    background: #f33588;
  }
`;
