import { createApp } from "./src/app.js"

const port = 8000; 

const main = () => {
  const app = createApp(); 
  Deno.serve({port}, app.fetch); 
}

main(); 