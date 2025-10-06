'use client'
import { CartSidebar } from '@/app/components/cart/CartSidebar'
import { Checkbox, TextField, Typography } from '@/app/components/common'
import Breadcrumbs from '@/app/components/common/BreadCrumbs'
import { NextPage } from 'next'
import { GoMail } from 'react-icons/go'
import { IoPersonOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { FormAddress, ICardModal, ProductList } from '@/app/components/checkout'
import { CiMoneyBill } from 'react-icons/ci'
import { SiMastercard } from 'react-icons/si'
import { FaPaypal } from 'react-icons/fa6'
import { useState } from 'react'

const Mock_Cart_Items = [
  {
    id: '1',
    title: 'PolySave GRP Panels',
    price: 199.99,
    image: '/home/bg2.svg',
    category: 'Home',
  },
  {
    id: '2',
    title: 'PolySave GRP Panels',
    price: 199.99,
    image: '/home/bg2.svg',
    category: 'Home',
  },
  {
    id: '3',
    title: 'PolySave GRP Panels',
    price: 199.99,
    image: '/home/bg2.svg',
    category: 'Home',
  },
]

const CheckoutPage: NextPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="py-8 px-3 sm:px-16">
        <Breadcrumbs />
        <div className="mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Product List (70%) */}
            <div className="lg:col-span-2">
              <Typography variant="h6" weight="bold">
                Personal Info
              </Typography>
              <div className="sm:flex gap-3 mt-2">
                <TextField placeholder="First Name" icon={<IoPersonOutline size={24} />} />
                <TextField
                  placeholder="Last Name"
                  icon={<IoPersonOutline size={24} />}
                  className="mt-3 sm:mt-0"
                />
              </div>
              <div className="sm:flex gap-3 mt-6">
                <TextField placeholder="Email" icon={<GoMail size={24} />} />
                <TextField
                  placeholder="Phone Number"
                  icon={<FiPhone size={24} />}
                  className="mt-3 sm:mt-0"
                />
              </div>
              <FormAddress />
              <Typography variant="h6" weight="bold" className="mt-7">
                Payment
              </Typography>
              <Checkbox icon={<CiMoneyBill />} label="Cash On Delivery" />
              <Checkbox
                icon={<SiMastercard />}
                label="Credit/Debit Card"
                onChange={() => setOpen(true)}
              />
              <Checkbox icon={<FaPaypal />} label="PayPal" />

              <Typography variant="h6" weight="bold" className="mt-7">
                Your Order
              </Typography>
              {Mock_Cart_Items.map((item) => (
                <ProductList key={item.id} item={item} />
              ))}
            </div>

            {/* Right: Coupon & Checkout (30%) */}
            <div className="lg:col-span-1">
              <CartSidebar items={Mock_Cart_Items} />
            </div>
          </div>
        </div>
      </div>
      <ICardModal isOpen={open} setIsOpen={setOpen} />
    </>
  )
}

export default CheckoutPage
