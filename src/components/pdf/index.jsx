import React from "react";
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
  const createPdf = () => {
    const { header, experience, skills, projects } = resumeJSON;
    const { detail } = experience;
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
                ul: detail
              }
            }
          ]
        }
      ],
      defaultStyle: {
        font: "Cormorant"
      }
    };

    pdfMake.createPdf(docDefinition, null, fonts, vfs).download();
  };

  return (
    <button type="button" onClick={createPdf}>
      Download PDF
    </button>
  );
};

PDF.propTypes = {};

export default PDF;
