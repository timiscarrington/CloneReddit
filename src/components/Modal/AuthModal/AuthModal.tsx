
import { AuthModalState } from '@/src/atoms/authModalAtom';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Text} from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import AuthInput from './AuthInput';
import OAuthButton from './OAuthButton';

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
          <ModalHeader textAlign='center'>
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Sign up'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex'  flexDirection='column' alignItems='center' justifyContent='center' pb={6}>
            <Flex direction='column' align='center' justify='center' width= '70%'>
              <OAuthButton />
              <Text color='gray.500' fontWeight={700}>
                OR
              </Text>
              <AuthInput />
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AuthModal;