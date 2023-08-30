import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "@/components/Container";
import backgroundImage from "@/images/background-features.jpg";

import { track } from "@amplitude/analytics-browser";

import { Text, Icon, Spacer, Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'

/////////////////////////////////////////////////////////////

const features = [
  {
    title: "Spot issues before they emerge",
    description:
      "Instantly evaluate downstream effects before finalizing any merges, right from Pull Requests! Say goodbye to breaking changes in Prod!",
    image: "/images/features/pull-request-piperider-report-github-downstream-impact.png", // import screenshotPayroll from "@/images/screenshots/run_report.png"; "@/images/screenshots/run_report.png"; // To make images 'Bigger', make the aspect ratio taller.
  },
  {
    title: "Know where impacts come from",
    description:
      "Seize control over your data quality! Identify and rectify unexpected impacts swiftly with our sophisticated Lineage Diff!",
    image: "/images/features/lineage-diff-piperider.png",
  },
  {
    title: "Build trust with transparency",
    description:
      "Keep stakeholders informed of upcoming changes that matter to them. Automate alerts on business-critical assets like dbt Metrics, Exposures and BI Dashboards!",
    image: "/images/features/downstream-notification-piperider.png",
  },
];

export function FeatureFeatures() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");
  
  let [zoomedImage, setZoomedImage] = useState(null);
  let [zoomedImageTitle, setZoomedImageTitle] = useState(null);

  const imageZoomModalDisclosure = useDisclosure();

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
      className="relative overflow-hidden pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="flex flex-col items-center justify-center space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="w-full flex flex-col md:flex-row md:space-x-6 md:items-center">
              <div className="flex-1 p-4">
                <div className="p-8 max-w-md mx-auto">
                  <h2 className="text-4xl font-display mb-2 leading-tight">{feature.title}</h2>
                  <p className="leading-relaxed my-4">{feature.description}</p>
                </div>
              </div>
              <div 
                className={`flex-1 m-4 ${index % 2 != 0 ? 'md:order-first' : ''} 
                  hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer`}
                onClick={() => {
                  setZoomedImage(feature.image); 
                  setZoomedImageTitle(feature.title);
                  track(`[Action] Zoom - ${index} - ${feature.title}`);
                  imageZoomModalDisclosure.onOpen();
                }}
              >

              {/* Todo: Readd Tracking OnClick */}

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
          ))}
        </div>

      </Container>
      <ImageZoomModal isOpen={imageZoomModalDisclosure.isOpen} onOpen={imageZoomModalDisclosure.onOpen} onClose={imageZoomModalDisclosure.onClose} imagePath={zoomedImage} imageTitle={zoomedImageTitle}  />
    </section>
  );
}

////////////////////////////////////////////////////////////

export function ImageZoomModal( {isOpen, onOpen, onClose, imageTitle, imagePath}) {
  return (
    <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent m={8} borderRadius={16}>
        <ModalHeader>{imageTitle ? imageTitle : 'Image'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {imagePath && (
            <Image
              src={imagePath}
              layout="responsive"
              height={500}
              width={500}
              className='rounded-md'
            />
          )}
        </ModalBody>

        <ModalFooter>
          {/*<Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>*/}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

