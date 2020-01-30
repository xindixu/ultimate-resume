import styled from "styled-components";
import { styleSettings } from "../../lib/styleSettings";

const { spacerBase, spacerMd } = styleSettings;

const letterSizeAspectRatio = 129.41;
export const LetterSize = styled.div`
  height: 0;
  overflow: hidden;
  background: white;
  position: relative;
  width: 100%;
  padding-top: ${letterSizeAspectRatio}%;
  border: 1px solid black;
  margin: ${spacerBase};
`;