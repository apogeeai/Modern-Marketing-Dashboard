"use client";
import React from "react";
import { Modal } from "flowbite-react";

interface PlaceholderModalProps {
  show: boolean;
  onClose: () => void;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  show,
  onClose,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Placeholder Only</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            This is a placeholder feature. Functionality coming soon.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}; 