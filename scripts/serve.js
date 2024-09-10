import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import send from "send";

// Use ES modules equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create server
const server = http.createServer((req, res) => {
  // Set the base directory for static files
  const filePath = path.join(__dirname, "../dist", req.url);

  // Serve the static files or index.html for unmatched routes
  send(req, req.url, { root: path.join(__dirname, "../dist") })
    .on("error", (err) => {
      if (err.status === 404) {
        // If file not found, serve index.html for SPA routing
        send(req, "index.html", { root: path.join(__dirname, "../dist") }).pipe(
          res,
        );
      } else {
        // Handle other errors (500 for server errors, etc.)
        res.statusCode = err.status || 500;
        res.end(err.message);
      }
    })
    .pipe(res);
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
