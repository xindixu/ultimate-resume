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

const ajv = new Ajv({ schemas: [resumeSchema] });
export const isResumeDataValid = json => ajv.validate(resumeSchema, json);
