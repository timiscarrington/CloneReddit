
import { AuthModalState } from '@/src/atoms/authModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';


const AuthModal:React.FC = () => {
   const [modalState, setModalState] = useRecoilState(AuthModalState);

   const handleClose = () => {
    setModalState(prev => ({
      ...prev,
      open: false
    }))
   }


  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex'  flexDirection='column' alignItems='center' justifyContent='center'>
            <Flex direction='column' align='center' justify='center' width= '70%'>
              {/* <OAuthButtons /> */}
              {/* <AuthInputs /> */}
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AuthModal;