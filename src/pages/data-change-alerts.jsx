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

import { BsFillStarFill, BsEye, BsEyeFill, BsFillAlarmFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { GrRun } from 'react-icons/gr'
import { BiGitPullRequest } from 'react-icons/bi'
import { FaHandshake } from 'react-icons/fa'

// import { useEffect } from 'react'

export default function DiscordPage() {

    const { publicRuntimeConfig } = getConfig();
    const AMPLITUDE_API_KEY = publicRuntimeConfig.AMPLITUDE_API_KEY;

    if (AMPLITUDE_API_KEY) {
        amplitude.init(AMPLITUDE_API_KEY);
        amplitude.track('[Init] View Feature Page - Change Alerts')
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
                            title: "Build trust with data alerts that actually matter",
                            description: "Use PipeRider to help set alerts that actually matter. Target data events relevant to you, your team, or downstream stakeholders.",
                            image: "/images/features/downstream-notification-piperider.png",
                        }}/>
                        <FeatureFeatures features={
                            [
                              {
                                title: "Keep downstream stakeholders looped in",
                                icon: FaHandshake,
                                description: null,
                                points: [
                                    "Build trust and visibility with downstream consumers with Slack notifications",
                                    "Notify stakeholders of upcoming data changes before they’re merged",
                                    "Prevent “broken” BI dashboards with checks on dbt metrics, exposures, and more"
                                ],
                                image: "/images/subfeatures/dbt-metric-change-slack-alert-43.png",
                              },
                              {
                                title: "Monitor and debug historic data changes",
                                icon: BsEyeFill,
                                description: null,
                                points: [
                                    "Monitor changes to critical schemas and their data impacts",
                                    "Stay informed of any new, deleted, or renamed entities",
                                    "Debug issues with a historic change-log of all code changes and their data impacts"
                                ],
                                image: "/images/subfeatures/change-history-data-impacts-43.png",
                              },
                              {
                                title: "Prioritize critical data assets",
                                icon: BsFillStarFill,
                                description: null,
                                points: [
                                    "Easily discuss the most critical business assets with Lineage Diff",
                                    "Set up alerts where-ever you need them, from Slack to email",
                                    "Determine important downstream metrics, exposures, and assets for alerts"
                                ],
                                image: "/images/subfeatures/prioritizing-critical-data-assets-43.png",
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