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

const headerPdf = ({ name, location, phone, links }) => [
  { text: name },
  { text: `${location} | ${phone}` },
  { text: links.map(({ link }) => link) }
];

const educationPdf = ({ school, date, details }) => [
  { text: school },
  { text: date },
  { ul: details }
];

const PDF = ({ resumeJSON }) => {
  const [pdf, setPdf] = useState(null);

  const { header, experience, skills, projects, education } = resumeJSON;
  console.log(education[0].details);

  const createPdf = () => {
    const docDefinition = {
      content: [
        {
          alignment: "justify",
          columns: [
            {
              width: "auto",
              stack: [
                ...headerPdf(header),
                ...education.map(edu => educationPdf(edu))
              ]
            },
            {
              width: "auto",
              ul: experience[0].details
            }
          ],
          columnGap: 10
        }
      ],
      defaultStyle: {
        font: "Cormorant"
      },
      styles: {}
    };

    pdfMake.createPdf(docDefinition, null, fonts, vfs).download();
  };

  return (
    <>
      <button type="button" onClick={createPdf}>
        Download PDF
      </button>
    </>
  );
};

PDF.propTypes = {};

export default PDF;
