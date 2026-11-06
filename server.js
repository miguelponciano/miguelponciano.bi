const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { execSync } = require("child_process");

const dev = process.env.NODE_ENV !== "production";
const hostname = "0.0.0.0";
const port = parseInt(process.env.PORT || "80", 10);
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Sincroniza tabelas automaticamente no PostgreSQL da Vertra Cloud quando a DATABASE_URL for informada
if (process.env.DATABASE_URL) {
  try {
    console.log("> [Vertra Cloud] DATABASE_URL detectada. Sincronizando tabelas do PostgreSQL...");
    execSync("npx prisma db push --skip-generate", { stdio: "inherit" });
    console.log("> [Vertra Cloud] Tabelas (Lead, Product, Order) sincronizadas com sucesso!");
  } catch (dbErr) {
    console.warn("> [Vertra Cloud] Aviso ao sincronizar banco:", dbErr.message);
  }
}

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, () => {
    console.log(`> Servidor ponci.bi pronto em http://${hostname}:${port}`);
  });
});
