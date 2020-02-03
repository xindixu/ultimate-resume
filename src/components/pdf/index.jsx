import React, { useState } from "react";
import PropTypes from "prop-types";
import pdfMake from "pdfmake";
import font from "pdfmake/build/vfs_fonts";
import { formatDate } from "../../lib/util";
import { styleSettings } from "../../lib/styleSettings";

const { pink } = styleSettings;
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
  links.map(({ title, text, link }) => ({
    text: `${title}: ${text} \n`,
    link
  }))
];

const educationPdf = ({ school, date, details }) => [
  { text: school },
  {
    text: `${formatDate(date)}`
  },
  { ul: details }
];
const skillPdf = skill => {
  const texts = skill.map(
    ({ category, details }) => `${category}:  ${details}`
  );
  return { ul: texts };
};

const experiencePdf = ({ title, company, location, date, details }) => [
  {
    columns: [
      {
        width: "*",
        text: `${company} - ${title} @ ${location}`,
        style: "h3"
      },
      {
        width: "auto",
        text: `${formatDate(date[0])} - ${
          date[1] ? formatDate(date[1]) : "Present"
        }`
      }
    ]
  },
  { ul: details }
];

const projectsPdf = ({ title, tech, date, details }) => [
  {
    columns: [
      {
        width: "*",
        text: `${title} - ${tech}`,
        style: "h3"
      },
      {
        width: "auto",
        text: `${formatDate(date[0])} - ${
          date[1] ? formatDate(date[1]) : "Present"
        }`
      }
    ]
  },
  { ul: details }
];

const PDF = ({ resumeJSON }) => {
  const [pdf, setPdf] = useState(null);

  const { header, experience, skills, projects, education } = resumeJSON;

  const createPdf = () => {
    const docDefinition = {
      content: [
        {
          table: {
            widths: ["30%", "70%"],
            body: [
              [
                {
                  width: "30%",
                  stack: [
                    ...headerPdf(header),
                    { text: "Education", style: "h2" },
                    ...education.map(obj => educationPdf(obj)),
                    { text: "Skills", style: "h2" },
                    skillPdf(skills)
                  ],
                  fillColor: pink,
                  style: "left"
                },
                {
                  width: "70%",
                  stack: [
                    { text: "Experience", style: "h2" },
                    ...experience.map(obj => experiencePdf(obj)),
                    { text: "Projects", style: "h2" },
                    ...projects.map(obj => projectsPdf(obj))
                  ],
                  style: "right"
                }
              ]
            ]
          },
          layout: "noBorders"
        }
      ],
      defaultStyle: {
        font: "Cormorant",
        fontSize: 10,
        lineHeight: 1.5
      },
      styles: {
        h2: {
          bold: true,
          fontSize: 16
        },
        h3: {
          bold: true,
          fontSize: 12
        },
        left: {
          margin: [20, 20, 10, 20]
        },
        right: {
          margin: [10, 20, 20, 20]
        }
      },
      pageMargins: [0, 0, 0, 0]
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
