import Head from "next/head";
import getConfig from "next/config";
// import { loadIntercom } from "next-intercom";

import * as amplitude from "@amplitude/analytics-browser";

import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { SecondaryFeatures as BlogArea } from "@/components/SecondaryFeatures";
import { Testimonials } from "@/components/Testimonials";
import { siteMeta } from "@/lib/siteMeta";

import { ChakraProvider } from '@chakra-ui/react'
import SingletonContextProvider from './SingletonContextProvider'

import { Text } from '@chakra-ui/react'

export default function Home() {
  /*
  Generate the intercom script and load the composer
  */
  // loadIntercom({
  //   appId: "ofl16ydc", // default : ''
  //   ssr: false, // default: false
  //   initWindow: true, // default: true
  //   delay: 0, // default: 0  - usefull for mobile devices to prevent blocking the main thread
  // });

  const { publicRuntimeConfig } = getConfig();
  const AMPLITUDE_API_KEY = publicRuntimeConfig.AMPLITUDE_API_KEY;

  if (AMPLITUDE_API_KEY) {
    amplitude.init(AMPLITUDE_API_KEY);
    amplitude.track('[Init] View Home Page')
  }

  return (
    <>
      <Head>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <meta property="og:title" content={siteMeta.ogTitle} />
        <meta property="og:image" content={siteMeta.ogImgUrl} />
        <meta property="og:description" content={siteMeta.ogDescription} />
        <meta property="og:url" content={siteMeta.ogUrl} />
        <meta property="og:type" content={siteMeta.ogType} />
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <script async src="https://analytics.umami.is/script.js" data-website-id="ccd6423b-439f-4179-ab29-06a877894da0"></script>
      </Head>
      <ChakraProvider>
        <SingletonContextProvider>
          <Header />
          <main>
              <Hero />
              <PrimaryFeatures />
              <BlogArea />
              <CallToAction />
              {/* <Testimonials /> */}
              <Pricing />
              {/* <Faqs /> */}
          </main>
          <Footer />
        </SingletonContextProvider>
      </ChakraProvider>
      
    </>
  );
}
