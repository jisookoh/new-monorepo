import type { AppProps } from 'next/app'
import { useState } from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import {QueryCache, QueryClient, QueryClientProvider, useQueryClient} from "@tanstack/react-query";


export default function App({ Component, pageProps }: AppProps) {
  const [ queryClient, setQueryClient ] = useState<QueryClient>(() => {
      const queryCache = new QueryCache();
      return new QueryClient({
          queryCache,
          defaultOptions: {
              queries: {
                  retry: false,
              }
          }
      })
  });

  return (
    <>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
        <GlobalStyle />
    </>
  )
}
