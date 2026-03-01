import { createApp } from "../src/app.js";
import {describe, it} from "@std/testing/bdd";
import {assertEquals} from '@std/assert';

describe("When client hits a route ", () => {
  describe("if the route is invalid",  () => {
    it("server will return exception response with 404 status", () => {
      const app = createApp(); 
      const response = app.request("/random", {
        method : "GET"
      }); 
      assertEquals(response.status, 404); 
    })
  })
})
