import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";

import type { AppRouter } from "../../server/src/trpc";
import { port } from "../../server/src/trpc/port";

export const trpc = createTRPCProxyClient<AppRouter>({
  transformer: SuperJSON,
  links: [
    httpBatchLink({
      url: `http://localhost:${port}`,
    }),
  ],
});
