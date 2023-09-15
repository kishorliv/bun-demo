const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hi from bun server");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
