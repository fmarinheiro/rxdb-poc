export const AppClickSchema = {
  version: 0,
  title: "schema for a click",
  description: "describes a click",
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    positionX: {
      type: "number",
    },
    positionY: {
      type: "number",
    },
  },
  required: ["id", "positionX", "positionY"],
}
