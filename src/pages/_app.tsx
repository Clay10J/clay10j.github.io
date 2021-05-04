// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import React from "react";
import Heading from "../components/Heading";
import Skills from "../components/Skills";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen p-4 divide-y-2 divide-white divide-opacity-60">
      <Heading />
      <Skills />
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
