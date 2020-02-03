import styled from "styled-components";
import { styleSettings } from "../../lib/styleSettings";

const { spacerMd, pink, left, right } = styleSettings;

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
`;

export const Left = styled.div`
  background: ${pink};
  width: ${left};
  padding: ${spacerMd};
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;

  h1,
  h2 {
    color: white;
  }
`;

export const Right = styled.div`
  width: ${right};
  padding: ${spacerMd};

  h2 {
    color: ${pink};
  }
`;
