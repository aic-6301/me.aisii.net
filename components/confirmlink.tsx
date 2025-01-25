"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ConfirmModal from './ConfirmModal';

interface ConfirmLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ConfirmLink: React.FC<ConfirmLinkProps> = ({ href, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    window.open(href, '_blank');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='transition duration-300 ease-in-out'>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      </div>
    </>
  );
};

export default ConfirmLink;
