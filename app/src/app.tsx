import { Route, Router, Routes } from "@solidjs/router";
import { QueryClientProvider } from "@tanstack/solid-query";

import { Example } from "./pages/example/index.tsx";
import { queryClient } from "./queryClient.ts";

export function AppWithoutProviders() {
  return (
    <>
      <div class="flex h-screen flex-col overflow-auto">
        <div class="relative flex-grow">
          <Routes>
            <Route path="/" component={Example} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppWithoutProviders />
      </Router>
    </QueryClientProvider>
  );
}
