import { StoryContextProvider } from "../../components/Context";
import A11yDecorator from "../../A11yDecorator";
import CenteredDecorator from "../../CenteredDecorator";

export default function Iframe() {
  const page = {};

  return (
    <StoryContextProvider value={{ page }}>
      <CenteredDecorator page={page}>
        <A11yDecorator page={page}>foo</A11yDecorator>
      </CenteredDecorator>
    </StoryContextProvider>
  );
}
