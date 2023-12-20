import { createServer } from "miragejs";
import data from "../data/data";

export function makeServer() {
  let server = createServer({
    seeds(server) {
      server.db.loadData({
        users: data,
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/users", (schema, request) => {
        let qp = request.queryParams;
        const limit = 20;
        const totalPages = Math.ceil(schema.db.users.length / limit);
        let page = parseInt(qp.page as string);
        let start = limit * (page - 1);
        let end = start + limit;
        const data = schema.db.users.slice(start, end);
        return { users: data, totalPages, curPage: page };
      });
    },
  });

  return server;
}
