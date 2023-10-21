import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "dmvftbhl",
  dataset: "production",
  title: "portfolio",
  apiVersion: "2022-10-13",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config