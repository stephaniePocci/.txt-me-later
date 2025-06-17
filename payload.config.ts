import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import env from "@/env";
import collections from "@/payload/collections";
import users from "@/payload/collections/users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname, "src"),
    },
  },
  collections,
  editor: lexicalEditor(),
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, "payload.types.ts"),
  },
  db: sqliteAdapter({
    client: {
      url: env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [],
});
