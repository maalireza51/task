import Layout from "@/components/dashboardLayout/Layout";
import "@/styles/globals.css";
import localFont from "@next/font/local";

const iranSans = localFont({
  src: "../public/fonts/IRANSansWeb200.woff",
});
export default function App({ Component, pageProps }) {
  return (
    <Layout font={iranSans.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
