// eslint-disable-next-line import/prefer-default-export
export const resumeSchema = {
  title: "Template",
  type: "object",
  required: ["header", "experience", "projects", "skills", "education"],
  properties: {
    header: {
      type: "object",
      required: ["name", "links"],
      properties: {
        name: {
          type: "string"
        },
        location: {
          type: "string"
        },
        phone: {
          type: "string"
        },
        links: {
          type: "array",
          items: {
            type: "object",
            properties: {
              text: {
                type: "string"
              },
              link: {
                type: "string"
              }
            }
          }
        }
      }
    },
    experience: {
      type: "array",
      items: {
        type: "object",
        required: ["title", "date", "details"],
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
          },
          details: {
            type: "array",
            items: {
              type: "string"
            }
          }
        }
      }
    },
    projects: {
      type: "array",
      items: {
        type: "object",
        required: ["tech", "date", "details"],
        properties: {
          title: {
            type: "string"
          },
          tech: {
            type: "array",
            items: {
              type: "string"
            }
          },
          date: {
            type: "array",
            items: {
              type: "object",
              format: "date"
            }
          },
          details: {
            type: "array",
            items: {
              type: "string"
            }
          }
        }
      }
    },
    skills: {
      type: "array",
      items: {
        type: "object",
        properties: {
          category: {
            type: "string"
          },
          details: {
            type: "string"
          }
        }
      }
    },
    education: {
      type: "array",
      items: {
        type: "object",
        required: ["date", "details"],
        properties: {
          school: {
            type: "string"
          },
          date: {
            oneOf: [
              { type: "object", format: "date" },
              {
                type: "array",
                items: {
                  type: "object",
                  format: "date"
                }
              }
            ]
          },
          details: {
            type: "array",
            items: {
              type: "string"
            }
          }
        }
      }
    }
  }
};
