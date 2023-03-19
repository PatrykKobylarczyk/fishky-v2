import Layout from "components/Layout/Layout";
import { AuthProvider } from "hooks/useAuth";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import { RecoilRoot } from "recoil";


export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <AuthProvider>
      <RecoilRoot>
        <Layout />
        <Component {...pageProps} />
      </RecoilRoot>
    </AuthProvider>
  );
}
