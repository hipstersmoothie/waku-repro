import { fileURLToPath } from "url";
import { StoryContextProvider } from "../../components/Context";
import path from "path";

import A11yDecorator from "../../A11yDecorator";
import CenteredDecorator from "../../CenteredDecorator";

const decorators = [A11yDecorator, CenteredDecorator];
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "../../Button.stories.tsx");
const storyName = "Primary";

const page = {};
const story = {};

export default async function Iframe() {
  const Example = (await import(file))[storyName];

  if (!Example) {
    throw new Error("Could not find example");
  }

  let example = <Example />;

  if (decorators.length !== 0) {
    const decoratorComponents = await Promise.all(decorators);

    for (const Decorator of decoratorComponents) {
      example = (
        <Decorator page={page} story={story}>
          {example}
        </Decorator>
      );
    }
  }

  return (
    <StoryContextProvider value={{ page, story }}>
      {example}
    </StoryContextProvider>
  );
}
