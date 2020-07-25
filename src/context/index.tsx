import { createContext } from "react";

export interface ILoadingContext {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
}

const LoadingContext = createContext<ILoadingContext>({
  isLoading: false,
  setIsLoading: () => undefined,
});

export default LoadingContext;
