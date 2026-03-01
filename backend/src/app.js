import {Hono} from "hono"
import { notFound } from "./handler.js"

export const createApp = () => {
  const app = new Hono()
  app.get("*", notFound)
  return app; 
}

