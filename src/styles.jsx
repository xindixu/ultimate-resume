import styled from "styled-components";
import { device } from "./lib/styleSettings";

export const Wrapper = styled.main`
  display: block;
  @media ${device.laptop} {
    display: flex;
  }
`;
