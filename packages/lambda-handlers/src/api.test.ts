import { createRequest, createResponse } from "node-mocks-http";
import { ApiHandler, NotFoundError } from "./index";
import { expect, test, describe } from "bun:test";

describe("Api Handler", () => {
  test("should return 204 when controller returns undefined", async () => {
    const controller = async () => {
      return Promise.resolve(undefined);
    };

    const req = createRequest();
    const res = createResponse();

    const apiHandler = new ApiHandler(controller);

    await apiHandler.handler(req, res);

    expect(res.statusCode).toEqual(204);
    expect(res._getData()).toEqual("");
  });

  test("should return 200 when controller returns body", async () => {
    const controller = async () => {
      return Promise.resolve({
        body: {
          amount: 10,
        },
      });
    };

    const req = createRequest();
    const res = createResponse();

    const apiHandler = new ApiHandler(controller);

    await apiHandler.handler(req, res);

    expect(res.statusCode).toEqual(200);
    expect(res._getData()).toEqual({
      amount: 10,
    });
  });

  test("should return 404 when controller returns treated error", async () => {
    const controller = async () => {
      return Promise.reject(new NotFoundError());
    };

    const req = createRequest();
    const res = createResponse();

    const apiHandler = new ApiHandler(controller);

    await apiHandler.handler(req, res);

    expect(res.statusCode).toEqual(404);
    expect(res._getData()).toEqual({ reason: "NotFoundError" });
  });

  test("should return 500 when controller returns untreated error", async () => {
    const controller = async () => {
      return Promise.reject(new Error());
    };

    const req = createRequest();
    const res = createResponse();

    const apiHandler = new ApiHandler(controller);

    await apiHandler.handler(req, res);

    expect(res.statusCode).toEqual(500);
    expect(res._getData()).toEqual({ reason: "InternalServerError" });
  });
});
