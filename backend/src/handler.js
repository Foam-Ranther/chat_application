import { HTTPException } from 'hono/http-exception'

export const notFound = (c) => {
  throw new HTTPException(404, { message : "not found" }); 
}