"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children?: ReactNode;
}

const queryClient = new QueryClient();

const QueryWrapper = ({ children }: Props) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </div>
  );
};

export default QueryWrapper;
