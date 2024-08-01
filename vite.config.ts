import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import ssl from "@vitejs/plugin-basic-ssl";
import mkcert from "vite-plugin-mkcert";
export default defineConfig({
  plugins: [react(), mkcert()],
  server: { https: true },
  /* server: {
    https: {
      key: fs.readFileSync("./key.pem"),
      cert: fs.readFileSync("./cert.pem"),
    },
  }, */
});
