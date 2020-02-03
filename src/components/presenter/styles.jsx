import styled from "styled-components";
import { styleSettings } from "../../lib/styleSettings";

const { spacerSm, spacerMd, pink } = styleSettings;

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
`;

const Container = styled.div`
  padding: ${spacerMd} ${spacerSm};
`;

export const Left = styled(Container)`
  background: ${pink};
  h2 {
    color: white;
  }
`;

export const Right = styled(Container)``;
