import * as Joi from "joi";
import validateSchema from "./schema-validator";
import { expect, test, describe } from "bun:test";

describe("Schema validator", () => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string(),
  });

  test("should validate schema successfully", () => {
    const { data, errors } = validateSchema(schema, {
      name: "Daniel",
      email: "daniel@test.com",
    });

    expect(errors).toBeUndefined();
    expect(data).toEqual({
      name: "Daniel",
      email: "daniel@test.com",
    });
  });

  test("should return error", () => {
    const { data, errors } = validateSchema(schema, {
      email: true,
    });

    expect(errors).toEqual([
      { name: "name", reason: "name is required", value: undefined },
      { name: "email", reason: "email must be a string", value: true },
    ]);
    expect(data).toBeUndefined();
  });
});
