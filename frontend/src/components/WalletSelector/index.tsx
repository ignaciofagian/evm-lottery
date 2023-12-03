/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { Connector } from 'wagmi';
import WalletButton from './WalletButton';
import { useState } from 'react';
import { connectors } from '../../helpers/connectors';

interface WalletSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (connector: Connector) => void;
}

export default function WalletSelector({ isOpen, onClose, onConnect }: WalletSelectorProps) {
  const [active] = useState();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Selecciona el tipo de billetera</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={5}>
            {connectors.map((value: Connector) => (
              <WalletButton connector={value} onConnect={onConnect} isActive={active === value.name} />
            ))}
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
