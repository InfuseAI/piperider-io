// redirect piperider.io/discord -> https://discord.gg/b3HAykQPkn

import Head from "next/head";
import getConfig from "next/config";

import * as amplitude from "@amplitude/analytics-browser";

import { siteMeta } from "@/lib/siteMeta";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureHero } from "@/components/FeatureHero";
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
                        <FeatureHero feature={{
                            title: "See Data Impacts in Pull Requests. Catch issues before merging.",
                            description: "Instantly spot critical data impacts as part of your everyday workflow.",
                            image: "/images/features/pull-request-piperider-report-github-downstream-impact.png",
                        }}/>
                        <FeatureFeatures features={
                            [
                              {
                                title: "Check data impacts and avoid bad deployments",
                                description: null,
                                points: [
                                    "See the data impact of every code change",
                                    "Data Impact Summaries for revealing unexpected discrepancies at a glance",
                                    "Peace of mind that no data issues are deployed into production"
                                ],
                                image: "/images/features/pull-request-piperider-report-github-downstream-impact.png",
                              },
                              {
                                title: "Identify and fix unexpected data issues quickly",
                                description: null,
                                points: [
                                    "Spot any unexpected data discrepancies instantly in Impact Summaries",
                                    "Quickly perform Root Cause Analysis with quick links to the right place",
                                    "Get a birds eye view of upstream causes and downstream impacts with Lineage Diff"
                                ],
                                image: "/images/features/lineage-diff-piperider.png",
                              },
                              {
                                title: "Seamless integration with Pull Requests",
                                description: null,
                                points: [
                                    "Embeds into Pull Requests for effortless code reviews and CI/CD",
                                    "Data Impact Summaries everywhere you need them, from PR, to CI, to online reports",
                                    "Keep a historic log of every code change and data impact"
                                ],
                                image: "/images/features/downstream-notification-piperider.png",
                              },
                            ]
                        } />
                        <CallToAction />
                    </main>
                    <Footer />
                </SingletonContextProvider>
            </ChakraProvider>
            
        </>
    )
}