import styled from "styled-components";
import { styleSettings } from "../../lib/styleSettings";

const { spacerMd, pink } = styleSettings;

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

export const Left = styled(Container)`
  background: ${pink};
`;

export const Right = styled(Container)``;

export const Header = styled.header``;
