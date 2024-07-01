import { fileURLToPath } from "url";
import { StoryContextProvider } from "../../components/Context";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decorators = [
  path.join(__dirname, "../../CenteredDecorator.tsx"),
  path.join(__dirname, "../../A11yDecorator.tsx"),
];

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
    const decoratorComponents = await Promise.all(
      decorators
        .map((filepath) => import(filepath).then((mod) => mod.default))
        .reverse()
    );

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
