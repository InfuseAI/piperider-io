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

import { BsEye, BsEyeFill, BsFillAlarmFill, BsFillCheckCircleFill } from 'react-icons/bs'
import { GrRun } from 'react-icons/gr'
import { BiGitPullRequest } from 'react-icons/bi'
import { MdMoveDown } from 'react-icons/md'
import { TiFlowChildren } from 'react-icons/ti'
import { PiFileMagnifyingGlass, PiDetectiveBold } from 'react-icons/pi'

// import { useEffect } from 'react'

export default function DiscordPage() {

    const { publicRuntimeConfig } = getConfig();
    const AMPLITUDE_API_KEY = publicRuntimeConfig.AMPLITUDE_API_KEY;

    if (AMPLITUDE_API_KEY) {
        amplitude.init(AMPLITUDE_API_KEY);
        amplitude.track('[Init] View Feature Page - Lineage Diff')
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
                            title: "Data Lineage Diff to instantly perform impact and root cause analysis",
                            description: "Data Lineage Diffs bring clarity and confidence to data migrations, refactors, and any code change. Align team priorities easily with lineage views.",
                            image: "/images/features/lineage-diff-piperider.png",
                        }}/>
                        <FeatureFeatures features={
                            [
                              {
                                title: "Visualize dependencies and data impacts",
                                icon: TiFlowChildren,
                                description: null,
                                points: [
                                    "A high level view of the entire pipeline and every important path",
                                    "Detailed visualizations that show critical data changes at a glance",
                                    "View all upstream and downstream dependencies to mitigate any potential issues"
                                ],
                                image: "/images/subfeatures/lineage-diff-overview-43.png",
                              },
                              {
                                title: "Lineage Diff expedites Pull Request reviews",
                                icon: PiDetectiveBold,
                                description: null,
                                points: [
                                    "See the full impact of any code changes on the entire pipeline",
                                    "Zoom in to instantly see the relationships of any affected code or file",
                                    "Dive into rich data profile comparisons for each model and column"
                                ],
                                image: "/images/subfeatures/lineage-diff-investigations-43.png",
                              },
                              {
                                title: "Refactor and migrate with confidence",
                                icon: MdMoveDown,
                                description: null,
                                points: [
                                    "Easily identify deletable and refactorable models to reduce data debt",
                                    "See all potential data impact paths for each model",
                                    "Ensure data migrations happen without breaking downstream applications"
                                ],
                                image: "/images/subfeatures/lineage-diff-refactor-view-43.png",
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