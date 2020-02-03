import styled from "styled-components";
import { styleSettings } from "../../lib/styleSettings";

const { spacerSm, spacerMd, pink } = styleSettings;

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Container = styled.div`
  padding: ${spacerMd} ${spacerSm};
`;

export const Left = styled(Container)`
  background: ${pink};
  width: 30%;
  h1,
  h2 {
    color: white;
  }
`;

export const Right = styled(Container)`
  width: 70%;

  h2 {
    color: ${pink};
  }
`;
