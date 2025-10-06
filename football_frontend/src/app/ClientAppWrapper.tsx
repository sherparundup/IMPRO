// src/app/ClientAppWrapper.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ClientProviders from "./clientProvider";
import NavBar from "@/components/NavBar";

const queryClient = new QueryClient();

export default function ClientAppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ClientProviders>
        <NavBar />
        {children}
      </ClientProviders>
    </QueryClientProvider>
  );
}
