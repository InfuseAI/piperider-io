import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-features.jpg";

import screenshotExpenses from "@/images/screenshots/comparison_report.png";
import screenshotVatReturns from "@/images/screenshots/pr_summary.png";

const features = [
  {
    title: "Know Thy Data",
    description:
      "Data profiles with key metrics to assess your data sources (e.g. freshness, uniqueness, top-k, histograms, missing values, duplicate rows)",
    image: "/images/screenshots_copy/run_report.png", // import screenshotPayroll from "@/images/screenshots/run_report.png"; "@/images/screenshots/run_report.png"; // To make images 'Bigger', make the aspect ratio taller.
  },
  {
    title: "See the Changes that Matter",
    description:
      "Visualize schema changes, statistical profiles, and dbt metrics changes, so that you don't lose in the noises of alerts and overlook the important signals that really matters.",
    image: "/images/screenshots_copy/comparison_report.png",
  },
  {
    title: "Automate with Your Existing Stack",
    description:
      "dbt. data warehouses. modern data stack tools. you name it. Augment your CI process with the ready-made github action from marketplace",
    image: "/images/screenshots_copy/pr_summary.png",
  },
];

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-[#dc8e3b] pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] opacity-60 min-w-full"
        style={{
          mixBlendMode: "color-burn",
        }}
        src={backgroundImage}
        alt=""
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Enhanced Data Quality <br/>at Your Fingertips
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Empower your data engineering processes with robust and accurate information.
          </p>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row md:space-x-6 md:items-center">
              <div className="flex-1 p-4">
                <div className="p-8 max-w-md mx-auto">
                  <h2 className="text-2xl font-bold mb-2 text-white">{feature.title}</h2>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
              <div className={`flex-1 m-4 ${index % 2 != 0 ? 'md:order-first' : ''} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105`}>
                <a href={feature.image} target='_blank' rel='noopener noreferrer' className="cursor-zoom-in">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="responsive"
                    height={500} // To make images 'Bigger', make the aspect ratio taller.
                    width={500}
                    className='rounded-md'
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
