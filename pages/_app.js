import Layout from "@/components/dashboardLayout/Layout";
import "@/styles/globals.css";
import localFont from "@next/font/local";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const iranSans = localFont({
  src: "../public/fonts/IRANSansWeb200.woff",
});
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout font={iranSans.className}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
