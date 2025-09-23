import Image from 'next/image'
import { Typography } from '../../common'
import { FaGooglePay, FaPhoneAlt } from 'react-icons/fa'
import { FaStripe } from 'react-icons/fa'
import { SiMastercard } from 'react-icons/si'
import { GoMail } from 'react-icons/go'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
      {/* {Footer Section} */}
      <footer className="sm:px-16 px-3">
        <div className="border-b border-gray-200">
          <div className="sm:grid grid-cols-4  pb-5">
            {/* {Section 1} */}
            <div>
              <Image
                src="/authentication/logo.svg"
                alt="Logo"
                width={60}
                height={60}
                className=" w-[70%] -ml-16 -my-9 sm:hidden block"
              />
              <Image
                src="/authentication/logo.svg"
                alt="Logo"
                width={60}
                height={60}
                className=" w-[60%] -my-9 -ml-12 hidden sm:block"
              />
              <Typography
                variant="xlarge"
                color="custom"
                customColor="text-secondary"
                weight="regular"
              >
                Polysave General Trading L.L.C. has established itself as a pivotal partner in the
                supply and distribution of high-quality plastic raw materials and industrial
                solutions.
              </Typography>
              <Typography
                variant="large"
                color="custom"
                customColor="text-secondary"
                weight="medium"
                className="mt-3"
              >
                Accepted Payments
              </Typography>
              <div className="flex gap-2 mt-2">
                <div className="border border-gray-200 rounded-lg inline-flex px-3 items-center justify-center">
                  <FaGooglePay size={27} />
                </div>
                <div className="border border-gray-200 rounded-lg inline-flex px-3 items-center justify-center">
                  <FaStripe size={27} />
                </div>
                <div className="border border-gray-200 rounded-lg inline-flex px-3 items-center justify-center">
                  <SiMastercard size={27} />
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="border border-gray-200 rounded-lg inline-flex px-3 items-center justify-center">
                  <FaGooglePay size={27} />
                </div>
                <div className="border border-gray-200 rounded-lg inline-flex px-3 items-center justify-center">
                  <FaStripe size={27} />
                </div>
                <div className="border border-gray-200 rounded-lg inline-flex px-3 items-center justify-center">
                  <SiMastercard size={27} />
                </div>
              </div>
            </div>
            {/* {Section 2} */}
            <div className="mt-10 sm:ml-11">
              <Typography variant="h6" weight="bold" color="custom" customColor="text-secondary">
                Quick Links
              </Typography>
              <ul className=" space-y-8 mt-3">
                <li>Home</li>
                <li>Properties</li>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
              </ul>
            </div>
            {/* {Section 3} */}
            <div className="mt-10">
              <Typography variant="h6" weight="bold" color="custom" customColor="text-secondary">
                Company
              </Typography>
              <ul className=" space-y-8 mt-3">
                <li>Home</li>
                <li>Properties</li>
                <li>About</li>
                <li>Services</li>
              </ul>
            </div>
            {/* {Section 4} */}
            <div className="mt-10">
              <Typography variant="h6" weight="bold" color="custom" customColor="text-secondary">
                Quick Links
              </Typography>
              <div className="gap-2 flex items-center mt-3">
                <GoMail className="text-secondary-500 mt-1" size={24} />
                <Typography
                  color="custom"
                  customColor="text-secondary-500"
                  variant="xlarge"
                  weight="regular"
                  className=""
                >
                  sales@luxusrealestate.com
                </Typography>
              </div>
              <div className="gap-2 flex items-center mt-8">
                <FaPhoneAlt className="text-secondary-500 mt-1" size={24} />
                <Typography
                  color="custom"
                  customColor="text-secondary-500"
                  variant="xlarge"
                  weight="regular"
                  className=""
                >
                  +971 123 456 789
                </Typography>
              </div>
              <div className="flex gap-10 mt-10">
                <FaFacebookF size={24} />
                <FaTwitter size={24} />
                <FaInstagram size={24} />
                <FaYoutube size={24} />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="sm:flex justify-between sm:px-16 px-3 pt-5 pb-3">
        <Typography
          variant="medium"
          weight="regular"
          color="custom"
          customColor="text-secondary-300"
          className="mx-auto sm:mx-0"
        >
          Copyright © 2025 POLYSAVE, All Rights Reserved.
        </Typography>
        <div className="flex gap-6 items-center justify-center my-3 sm:my-3">
          <Typography
            variant="medium"
            weight="regular"
            color="custom"
            customColor="text-secondary-300"
          >
            Terms of Service
          </Typography>
          <Typography
            variant="medium"
            weight="regular"
            color="custom"
            customColor="text-secondary-300"
          >
            Privacy Policy
          </Typography>
        </div>
      </div>
    </>
  )
}
