import fs from "fs";
import path from "path";

const rmAllResolver = () => {
  const gqlDir = path.join("src", "schema");
  const files = fs.readdirSync(gqlDir, { recursive: true });
  for (const file of files) {
    if (
      typeof file === "string" &&
      (file.endsWith("Mutation") || file.endsWith("Query"))
    ) {
      const filePath = path.join(gqlDir, file);
      fs.rmSync(filePath, { recursive: true });
    }
  }
};
