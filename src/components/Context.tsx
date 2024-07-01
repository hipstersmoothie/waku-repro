"use client";

import { createContext, useContext } from "react";

interface StoryContext {
  page: any;
  story: any;
}

const StoryContextC = createContext<StoryContext | undefined>(undefined);

export const StoryContextProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: StoryContext;
}) => {
  return (
    <StoryContextC.Provider value={value}>{children}</StoryContextC.Provider>
  );
};
export const useStoryContext = () => useContext(StoryContextC);
