const spacers = {
  spacerBase: "1rem",
  spacerMd: "2rem"
};

const fontSize = {
  fontSizeBase: "10px",
  fontSizeMd: "12px",
  fontSizeLg: "14px",
  fontSizeXl: "20px"
};

const colors = {
  pink: "#E6BFC7"
};

export const styleSettings = {
  ...spacers,
  ...colors,
  ...fontSize,
  left: "35%",
  right: "65%"
};

export const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopL: `(min-width: ${breakpoints.desktop})`
};
