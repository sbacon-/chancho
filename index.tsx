Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
	let path = new URL(req.url).pathname;
	path = path.replace("/classics","./");
	if (path.endsWith("/")) {
		path = path + "index.html";
	}
	const file = Bun.file(path);
	return new Response(file);
  },
  port: process.env.PORT || 3000,
});

