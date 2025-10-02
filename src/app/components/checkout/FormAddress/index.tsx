'use client'

import React, { useState } from 'react'
import { TextField, Typography, Button } from '../../common'
import { MdOutlineAddLocationAlt } from 'react-icons/md'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'

export const FormAddress = (): React.ReactElement => {
  const [edit, setEdit] = useState(false)
  const [address, setAddress] = useState('15, Al Thammam Street, Dubai, United Arab Emirates')
  const [tempAddress, setTempAddress] = useState(address)

  const handleSave = () => {
    setAddress(tempAddress)
    setEdit(false)
  }

  const handleCancel = () => {
    setTempAddress(address)
    setEdit(false)
  }

  return (
    <div className="w-full mt-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Typography variant="h6" weight="bold">
          Shipping Address
        </Typography>
        <div className="flex gap-2 items-center cursor-pointer">
          <MdOutlineAddLocationAlt size={24} className="text-secondary-500" />
          <Typography variant="xlarge" weight="regular" className="text-secondary-500">
            Add New Address
          </Typography>
        </div>
      </div>

      {/* Address Box */}
      <div className="flex gap-4 mt-3 items-center w-full shadow-one rounded-[14px] py-3 px-2">
        {/* Icon */}
        <div className="bg-gray-50 flex items-center justify-center p-6 rounded-2xl">
          <IoLocationOutline size={32} className="text-secondary-500" />
        </div>

        {/* Address Text + Edit Mode */}
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <Typography variant="xlarge" weight="regular">
              Deliver To
            </Typography>

            {!edit && (
              <AiOutlineEdit
                onClick={() => setEdit(true)}
                size={24}
                className="text-secondary-500 cursor-pointer"
              />
            )}
          </div>

          {/* Address or Input */}
          {edit ? (
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <TextField
                value={tempAddress}
                onChange={(e) => setTempAddress(e.target.value)}
                placeholder="Enter new address"
                className="flex-1"
              />
              <div className="flex gap-2">
                <Button title="Save" variant="primary" onClick={handleSave} className="px-4 py-2" />
                <Button
                  title="Cancel"
                  variant="outline"
                  onClick={handleCancel}
                  className="px-4 py-2"
                />
              </div>
            </div>
          ) : (
            <Typography variant="xlarge" weight="medium" className="mt-2">
              {address}
            </Typography>
          )}
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex gap-3 mt-3">
        <input
          type="checkbox"
          className="w-[22px] h-[22px] text-primary-500 border-2 border-gray-300 cursor-pointer rounded-lg focus:ring-brand appearance-none checked:bg-primary-500 checked:border-primary-500 relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center"
        />
        <Typography variant="xlarge">Same as Billing</Typography>
      </div>
    </div>
  )
}
