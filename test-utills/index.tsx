import React, { FC, ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { mockRouter } from "./mockRouter";
import {
  render,
  renderHook,
  RenderOptions,
  RenderHookOptions,
} from "@testing-library/react";
import { NextRouter } from "next/router";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { CacheProvider } from "@chakra-ui/next-js";

interface IProps {
  children: React.ReactNode;
  routerProps?: Partial<NextRouter>;
}
const AllProviders: FC<IProps> = ({ children, routerProps = {} }) => {
  return (
    <RouterContext.Provider value={mockRouter(routerProps)}>
      <CacheProvider>
        <ChakraProvider>
          <MemoryRouterProvider>{children}</MemoryRouterProvider>
        </ChakraProvider>
      </CacheProvider>
    </RouterContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
  routerProps?: Partial<NextRouter>
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <>
        <AllProviders routerProps={routerProps}>{children}</AllProviders>
      </>
    ),
    ...options,
  });
function customRenderHook<T>(
  render: (props?: any) => T,
  options?: RenderHookOptions<any>
) {
  return renderHook(render, {
    wrapper: ({ children }) => (
      <>
        <AllProviders routerProps={{}}>{children}</AllProviders>
      </>
    ),
    ...options,
  });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render, customRenderHook as renderHook };
