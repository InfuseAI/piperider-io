// redirect piperider.io/discord -> https://discord.gg/b3HAykQPkn

import Head from "next/head";
import getConfig from "next/config";

import * as amplitude from "@amplitude/analytics-browser";

import { siteMeta } from "@/lib/siteMeta";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { FeatureFeatures } from "@/components/FeatureFeatures";
import { CallToAction } from "@/components/CallToAction";

import { ChakraProvider } from '@chakra-ui/react'
import SingletonContextProvider from './SingletonContextProvider'

// import { useEffect } from 'react'

export default function DiscordPage() {

    const { publicRuntimeConfig } = getConfig();
    const AMPLITUDE_API_KEY = publicRuntimeConfig.AMPLITUDE_API_KEY;

    if (AMPLITUDE_API_KEY) {
        amplitude.init(AMPLITUDE_API_KEY);
        amplitude.track('[Init] View Feature Page - Template')
    }

    return(
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
                        … Insert Feature Template Body Here …
                        <FeatureFeatures />
                        <CallToAction />
                    </main>
                    <Footer />
                </SingletonContextProvider>
            </ChakraProvider>
            
        </>
    )
}