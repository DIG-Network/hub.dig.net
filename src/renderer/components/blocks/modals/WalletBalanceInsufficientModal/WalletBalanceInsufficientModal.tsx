import React, {useCallback} from "react";
import { Modal } from "flowbite-react";
import {FormattedMessage} from "react-intl";
import {FauxLinkButton} from "@/components";
import {useNavigate} from "react-router-dom";
import ROUTES from '@/routes/route-constants';

interface WalletBalanceInsufficientModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const WalletBalanceInsufficientErrorModal: React.FC<WalletBalanceInsufficientModalProps> = (
  { showModal, setShowModal }: WalletBalanceInsufficientModalProps) => {

  const navigate = useNavigate();
  const handleGoToSettings = useCallback(() => {
    setShowModal(false);
    navigate(ROUTES.SETTINGS);
  }, [setShowModal, navigate])

  return (
    <Modal show={showModal} onClose={() => setShowModal(false)}>
      <Modal.Header>
        <FormattedMessage id="insufficient-wallet-balance"/>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <FormattedMessage id="your-spendable-wallet-balance-is-insufficient-for-this-action"/>
            {'. '}
            <FormattedMessage id="reducing-your-default-fee-or-default-mirror-coin-value-can-help-resolve-this-error"/>.
          </p>
          <FauxLinkButton onClick={handleGoToSettings}>
            <FormattedMessage id={"the-default-fee-and-mirror-coin-value-can-be-set-in-settings"}/>.
          </FauxLinkButton>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export { WalletBalanceInsufficientErrorModal };