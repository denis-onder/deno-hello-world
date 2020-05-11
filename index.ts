import { listenAndServe } from "https://deno.land/std/http/server.ts";

const port = 9090;

listenAndServe({ port }, async (req) => {
  console.log("Inbound request");
  if (req.method === "GET" && req.url === "/") {
    req.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html",
      }),
      body: await Deno.open("./serve_me.index.html"),
    });
  }
});

console.log(`Server running\nhttp://localhost:${port}/`);
