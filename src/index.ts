import { PORT } from "@/lib/constant";
import { server } from "@/server";

server.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}/graphql`);
});
