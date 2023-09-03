import { createContext, useState, useContext } from 'react';

import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Center, Heading, Text, Icon, Spacer, Button, Box, Grid, Image } from '@chakra-ui/react'
import { BsGithub, BsFillCloudFill } from 'react-icons/bs'

import { track } from "@amplitude/analytics-browser";

// Create a context
const SingletonContext = createContext();

// Create a provider
export default function SingletonContextProvider({ children }) {
  const [state, setState] = useState('singleton'); // dummy example

  const getStartedDisclosure = useDisclosure();

  // make sure state is only created once
  let contextValue = useContext(SingletonContext);
  if (!contextValue) {
    contextValue = { state, setState, openGetStartedModal };
  }

  function openGetStartedModal() {
    getStartedDisclosure.onOpen();
  }

  return (
    <SingletonContext.Provider value={contextValue}>
      {children}
      <GetStartedModal 
        isOpen={getStartedDisclosure.isOpen} 
        onOpen={getStartedDisclosure.onOpen}
        onClose={getStartedDisclosure.onClose}
      />
    </SingletonContext.Provider>
  );
}

// Create a hook to use the SingletonContext, this is just to simplify using the context.
export function useSingletonContext() {
  return useContext(SingletonContext);
}

export function GetStartedModal( {isOpen, onOpen, onClose}) {
  return (
    <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <Center>
        <ModalContent m={8} borderRadius={16} bg="gray.100">
          <ModalHeader>
            <Heading fontSize='4xl' textAlign='center' as="h1">Get Started with PipeRider</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={8}>
            {/* TODO: Make this ROW Based on Mobile - e.g. Stack with relative directions and Boxes with Flex 1. */}
            <Grid gridTemplateColumns="repeat(2, 1fr)" gap={6} textAlign='center'>
              <Box bg='white' p={4} borderRadius={8}>
                <Heading  as="h2" fontSize='xl'>Local</Heading>
                <Text my={4}>PipeRider is open source and free. Use it locally, or add Cloud hosting later on!</Text>
                <Image maxW='200px' src='/images/illustrations/hand-coding-bro.png' alt='A Command Line Interface' mx='auto'/>
                <Button colorScheme='orange' mr={3} w="100%" borderRadius="100px" py={6} my={4}
                  onClick={() => {
                    track(`[Action] Click - Get Started - Command Line`); 
                    window.location.href = 'https://github.com/InfuseAI/piperider';
                    onClose()}
                  }
                >
                  <Icon as={BsGithub} boxSize={5} mr={2} />
                  Get Started with Command Line
                </Button>
              </Box>

              <Box bg='white' p={4} borderRadius={8}>
                <Heading  as="h2" fontSize='xl'>Cloud</Heading>
                <Text my={4}>PipeRider Cloud takes the hassle out of hosting PipeRider. Share reports with ease!</Text>
                <Image maxW='200px' src='/images/illustrations/completed-steps-bro.png' alt='A Command Line Interface' mx='auto'/>
                <Button colorScheme='orange' mr={3} w="100%" borderRadius="100px" py={6} my={4}
                  onClick={() => {
                    track(`[Action] Click - Get Started - Cloud`); 
                    window.location.href = 'https://cloud.piperider.io/signup';
                    onClose();}
                  }
                >
                  <Icon as={BsFillCloudFill} boxSize={5} mr={2} />
                  Get Started with Cloud
                </Button>
              </Box>
            </Grid>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Center>
    </Modal>
  )
}