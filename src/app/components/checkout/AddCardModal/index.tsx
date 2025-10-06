'use client'

import React from 'react'
import { Button, Modal, TextField, Typography } from '../../common'
import { IoPersonOutline } from 'react-icons/io5'
import { SiMastercard } from 'react-icons/si'
import { IoCalendarOutline } from 'react-icons/io5'
import { CiLock } from 'react-icons/ci'

interface ICardModal {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ICardModal: React.FC<ICardModal> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="w-full max-w-[778px]">
      <div className="px-6 py-6 bg-white rounded-[14px]">
        {/* Icon circle */}
        <div className=" justify-center mt-3">
          <Typography variant="h6" weight="bold">
            Add Credit/Debit Card
          </Typography>
          <TextField
            className="mt-1.5"
            placeholder="First Name"
            icon={<IoPersonOutline size={24} />}
          />
          <TextField
            className="mt-1.5"
            placeholder="**** **** **** 4242"
            icon={<SiMastercard size={24} />}
          />
          <TextField
            className="mt-1.5"
            placeholder="Expiry Date"
            icon={<IoCalendarOutline size={24} />}
          />
          <TextField className="mt-1.5" placeholder="CVV" icon={<CiLock size={24} />} />
          <div className="flex gap-3 mt-3 items-center">
            <input
              type="checkbox"
              className="w-[22px] h-[22px] text-primary-500 border-2 border-secondary-200 cursor-pointer rounded-lg focus:ring-brand appearance-none checked:bg-primary-500 checked:border-primary-500 relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center"
            />
            <Typography variant="xlarge">Store this Payment method</Typography>
          </div>
          <Button title="Save" className="w-full mt-5" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </Modal>
  )
}
