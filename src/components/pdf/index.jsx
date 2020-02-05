import React from "react";
import PropTypes from "prop-types";
import pdfMake from "pdfmake";
import font from "pdfmake/build/vfs_fonts";
import { formatDate, getIntInPx } from "../../lib/util";
import { styleSettings } from "../../lib/styleSettings";
import { logo } from "../../assets/logo";

const { pink, left, right, spacerBase } = styleSettings;

const { vfs } = font.pdfMake;
const fonts = {
  Cormorant: {
    normal: "Cormorant-Light.ttf",
    bold: "Cormorant-Medium.ttf",
    italics: "Cormorant-Italic.ttf",
    bolditalics: "Cormorant-BoldItalic.ttf"
  }
};

const padding = getIntInPx(spacerBase);

const headerPdf = ({ name, location, phone, links }) => [
  name === "Xindi Xu"
    ? { image: logo, width: 180, margin: [0, 20] }
    : { text: name },
  { text: `${location} | ${phone}` },
  links.map(({ title, text, link }) => ({
    text: `${title}: ${text} \n`,
    link
  }))
];

const educationPdf = ({ school, date, details }) => [
  {
    columns: [
      {
        width: "*",
        text: school,
        style: "h3",
        bold: true
      },
      {
        width: "auto",
        text: `${formatDate(date)}`,
        style: "h3",
        bold: true
      }
    ]
  },
  { ul: details, type: "circle", style: "list" }
];
const skillPdf = skill => {
  const texts = skill.map(({ category, details }) => [
    { text: category, bold: true, style: "h3" },
    { text: details }
  ]);
  return { ul: texts, type: "circle", style: "list" };
};

const experiencePdf = ({ title, company, location, date, details }) => [
  {
    columns: [
      {
        width: "auto",
        text: `${company} — `,
        style: "h3",
        bold: true
      },
      {
        width: "auto",
        text: `${title} @ ${location}`,
        style: "h3"
      },
      {
        width: "*",
        text: `${formatDate(date[0])} — ${
          date[1] ? formatDate(date[1]) : "Present"
        }`,
        alignment: "right",
        bold: true,
        style: "h3"
      }
    ]
  },
  { ul: details, type: "circle", style: "list" }
];

const projectsPdf = ({ title, tech, date, details }) => [
  {
    columns: [
      {
        width: "auto",
        text: `${title} — `,
        bold: true,
        style: "h3"
      },
      {
        width: "auto",
        text: tech.join(", "),
        style: "h3"
      },
      {
        width: "*",
        text: `${formatDate(date[0])} — ${
          date[1] ? formatDate(date[1]) : "Present"
        }`,
        alignment: "right",
        bold: true,
        style: "h3"
      }
    ]
  },
  { ul: details, type: "circle", style: "list" }
];

const PDF = ({ resumeJSON }) => {
  const { header, experience, skills, projects, education } = resumeJSON;
  const { name } = header;
  const createPdf = () => {
    const docDefinition = {
      info: {
        title: `Resume — ${name}`,
        author: name,
        subject: "Resume"
      },
      content: [
        {
          table: {
            widths: [left, right],
            heights: 2000,
            body: [
              [
                {
                  stack: [
                    ...headerPdf(header),
                    { text: "Education", style: "h2White" },
                    ...education.map(obj => educationPdf(obj)),
                    { text: "Skills", style: "h2White" },
                    skillPdf(skills)
                  ],
                  fillColor: pink,
                  style: "left"
                },
                {
                  stack: [
                    { text: "Experience", style: "h2Pink" },
                    ...experience.map(obj => experiencePdf(obj)),
                    { text: "Projects", style: "h2Pink" },
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
        fontSize: 8,
        lineHeight: 1.5,
        alignment: "justify"
      },
      styles: {
        h2Pink: {
          bold: true,
          fontSize: 14,
          lineHeight: 1,
          margin: [0, 10, 0, 0],
          color: pink
        },
        h2White: {
          bold: true,
          fontSize: 14,
          lineHeight: 1,
          margin: [0, 10, 0, 0],
          color: "white"
        },
        h3: {
          fontSize: 10,
          // left, top, right, bottom
          margin: [0, 4, 0, 0]
        },
        left: {
          margin: [1.5 * padding, padding, padding, padding]
        },
        right: {
          margin: [padding, padding, 1.5 * padding, padding]
        },
        list: {
          margin: [-8, 0, 0, 0]
        }
      },
      pageMargins: [0, 0, 0, 0],
      pageSize: "LETTER"
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
