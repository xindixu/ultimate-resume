import Ajv from "ajv";
import { resumeSchema } from "./constants";

export const randomId = (prefix = "XX") =>
  `${prefix}${Math.random()
    .toString(36)
    .substring(2, 8)}`;
export const roundTo2Places = num => (num < 10 ? `0${num}` : num);

export const formatDate = date => {
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${roundTo2Places(monthIndex + 1)}/${year}`;
};

export const getIntInPx = numberWithUnit => {
  const match = numberWithUnit.match(/^([0-9]+)([a-zA-Z]+)$/);
  const number = parseInt(match[1]);
  const unit = match[2];

  if (unit === "px") {
    return number;
  }
  if (unit === "rem") {
    return number * 16;
  }
  return 0;
};

const ajv = new Ajv({ schemas: [resumeSchema] });
export const isResumeDataValid = json => ajv.validate(resumeSchema, json);
