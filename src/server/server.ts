import { createServer } from "miragejs";
import data from "../data/data";

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api";
      this.get("/users", () => {
        return { users: data };
      });
    },
  });

  return server;
}
