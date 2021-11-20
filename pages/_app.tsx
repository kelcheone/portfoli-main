import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ID}`}
      />
      <Script strategy="lazyOnload" id="analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', ${process.env.GOOGLE_ID});`}
      </Script>

      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
        <div className="flex flex-col col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />

          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
