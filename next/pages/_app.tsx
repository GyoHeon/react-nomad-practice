import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import "../styles/globals.css";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

const App = ({ Component, pageProps }: AppProps) => (
  <SWRConfig value={{ fetcher }}>
    <Component {...pageProps} />
  </SWRConfig>
);

export default App;
