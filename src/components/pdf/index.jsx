import React, { useState } from "react";
import PropTypes from "prop-types";
import pdfMake from "pdfmake";
import font from "pdfmake/build/vfs_fonts";

const { vfs } = font.pdfMake;
const fonts = {
  Cormorant: {
    normal: "Cormorant-Light.ttf",
    bold: "Cormorant-Medium.ttf",
    italics: "Cormorant-Italic.ttf",
    bolditalics: "Cormorant-BoldItalic.ttf"
  }
};

const PDF = ({ resumeJSON }) => {
  const [pdf, setPdf] = useState(null);
  const createPdf = () => {
    const { header, experience, skills, projects } = resumeJSON;
    const { details } = experience;
    const docDefinition = {
      content: [
        {
          alignment: "justify",
          columns: [
            {
              width: "auto",
              text: header
            },
            {
              width: "auto",
              text: {
                ul: details
              }
            }
          ]
        }
      ],
      defaultStyle: {
        font: "Cormorant"
      }
    };

    const newPdf = pdfMake.createPdf(docDefinition, null, fonts, vfs).getBlob();
    setPdf(newPdf);
  };

  return (
    <>
      <button type="button" onClick={createPdf}>
        Download PDF
      </button>
      <embed src={pdf} />
    </>
  );
};

PDF.propTypes = {};

export default PDF;
