import { createContext, useState, useContext } from 'react';

import { useDisclosure } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { Text, Icon, Spacer, Button } from '@chakra-ui/react'

// Create a context
const SingletonContext = createContext();

// Create a provider
export function SingletonContextProvider({ children }) {
  const [state, setState] = useState('singleton'); // dummy example

  const getStartedDisclosure = useDisclosure();

  // make sure state is only created once
  let contextValue = useContext(SingletonContext);
  if (!contextValue) {
    contextValue = { state, setState, openGetStartedModal };
  }

  function openGetStartedModal() {
    console.log('openGetStartedModal()');
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
    <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent m={8} borderRadius={16}>
        <ModalHeader>Title - Get Started</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Modal Body</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}