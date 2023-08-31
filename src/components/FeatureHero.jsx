import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-features.jpg";

import { useSingletonContext } from '@/pages/SingletonContextProvider';

import { track } from "@amplitude/analytics-browser";

import { Text, Icon, Spacer, Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'

/////////////////////////////////////////////////////////////

export function FeatureHero({feature}) {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  const { openGetStartedModal } = useSingletonContext();

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
      className="relative overflow-hidden bg-[#dc8e3b] pb-20 pt-20 "
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-50%] translate-y-[-75%] opacity-60 min-w-full"
        style={{
          mixBlendMode: "color-burn",
        }}
        src={backgroundImage}
        alt=""
        unoptimized
      />
      <Container className="relative">
        <div className="flex flex-col items-center justify-center space-y-16">
            <div className="w-full flex flex-col md:flex-row md:space-x-6 md:items-center">
              <div className="flex-1 p-4">
                <div className="md:p-8 max-w-md md:mx-auto">
                  <h1 className="text-4xl md:text-6xl font-display mb-2 text-white leading-none">{feature.title}</h1>
                  <p className="text-gray-200 leading-relaxed my-6">{feature.description}</p>
                  <div className="">
                    <Button
                      borderRadius="full"
                      className="px-12"
                      onClick={() => {
                        track("[Action] Click CTA - Feature Hero");
                        openGetStartedModal();
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
              <div className={`flex-1 m-4 `}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="responsive"
                  height={500} // To make images 'Bigger', make the aspect ratio taller.
                  width={500}
                  className='rounded-md'
                />
              </div>
            </div>
          
        </div>

      </Container>
    </section>
  );
}