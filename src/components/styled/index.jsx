import styled from "styled-components";
import { styleSettings } from "../../lib/styleSettings";

const { spacerBase } = styleSettings;

const letterSizeAspectRatio = 129.41;
export const LetterSize = styled.div`
  height: 0;
  overflow: auto;
  background: white;
  position: relative;
  width: calc(100% - 2 * ${spacerBase});
  padding-top: ${letterSizeAspectRatio / 2}%;
  border: 1px solid black;
  margin: ${spacerBase};
`;
