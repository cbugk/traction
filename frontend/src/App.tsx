import { Refine } from "@refinedev/core";

import { dataProvider } from "./providers/data-provider";
import { ShowArticle } from "./pages/articles/show";

export default function App(): JSX.Element {
  return (
    <Refine dataProvider={dataProvider}>
        <ShowArticle />
    </Refine>
  );
}