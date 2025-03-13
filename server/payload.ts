import buildConfig from "payload/config";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import RichTextUploadFeature from "payload/dist/fields/richText/upload";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default buildConfig({
  serverURL:
    process.env.NODE_ENV === "production"
      ? "https://" +
        process.env.REPL_SLUG +
        "." +
        process.env.REPL_OWNER +
        ".repl.co"
      : "http://localhost:5000",
  admin: {
    user: "users",
    bundler: webpackBundler(),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  collections: [
    {
      slug: "users",
      auth: true,
      admin: {
        useAsTitle: "username",
      },
      fields: [
        {
          name: "username",
          type: "text",
          required: true,
        },
      ],
    },
    {
      slug: "articles",
      admin: {
        useAsTitle: "title",
      },
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "excerpt",
          type: "textarea",
        },
        {
          name: "content",
          type: "richText",
          admin: {
            elements: [
              "h2",
              "h3",
              "h4",
              "link",
              "blockquote",
              "ul",
              "ol"
            ],
            leaves: [
              "bold",
              "italic",
              "underline"
            ],
          },
        },
        {
          name: "category",
          type: "select",
          options: [
            { label: "Live", value: "live" },
            { label: "Community", value: "community" },
            { label: "News", value: "news" },
          ],
        },
        {
          name: "author",
          type: "text",
        },
        {
          name: "image",
          type: "text",
        },
        {
          name: "date",
          type: "date",
        },
        {
          name: "tags",
          type: "array",
          fields: [
            {
              name: "tag",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../shared/payload-types.ts"),
  },
});
