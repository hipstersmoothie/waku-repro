"use client";

import { createContext, useContext } from "react";
import { StoryContext } from "@fwoosh/types";

const StoryContext = createContext<StoryContext | undefined>(undefined);

export const StoryContextProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: StoryContext;
}) => {
  return (
    <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
  );
};
export const useStoryContext = () => useContext(StoryContext);
