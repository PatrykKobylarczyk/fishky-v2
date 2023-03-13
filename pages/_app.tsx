import Layout from "components/Layout/Layout";
import { AuthProvider } from "hooks/useAuth";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
