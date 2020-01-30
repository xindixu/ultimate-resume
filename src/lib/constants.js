// eslint-disable-next-line import/prefer-default-export
export const resumeSchema = {
  $schema: "http://json-schema.org/schema#",
  title: "Template",
  type: "object",
  required: ["header", "experience", "project", "skills", "education"],
  properties: {
    header: {
      type: "object",
      description: "Product identifier"
    },
    experience: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: {
            type: "string"
          },
          company: {
            type: "string"
          },
          location: {
            type: "string"
          },
          date: {
            type: "array",
            items: {
              type: "object",
              format: "date"
            }
          }
        }
      }
    }
    // project: {
    //   type: "number",
    //   minimum: 0
    // },
    // skills: {
    //   type: "array",
    //   items: {
    //     type: "string"
    //   }
    // },
    // education: {
    //   type: "object",
    //   properties: {
    //     warehouse: {
    //       type: "number"
    //     },
    //     retail: {
    //       type: "number"
    //     }
    //   }
    // }
  }
};
