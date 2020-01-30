import styled from "styled-components";
import { styleSettings } from "../../lib/styleSettings";

const { spacerBase, spacerMd } = styleSettings;

export const Wrapper = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  padding: ${spacerMd};
`;
export const Left = styled(Container)``;
export const Right = styled(Container)``;

export const Header = styled.header``;
