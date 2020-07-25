import { createContext } from "react";

export interface ILoadingContext {
  isLoading: boolean;
}

const LoadingContext = createContext<ILoadingContext>({
  isLoading: false,
});

export default LoadingContext;
