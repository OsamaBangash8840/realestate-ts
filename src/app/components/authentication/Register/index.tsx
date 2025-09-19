import Image from 'next/image'
import { Button, PasswordField, TextField, Typography } from '../../common'
import { IoPersonOutline } from 'react-icons/io5'
import { FaGoogle } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

export const Register = () => {
  return (
    <>
      <section className="sm:flex bg-background lg:min-h-screen">
        {/* Left Image */}
        <div className="hidden sm:block w-1/2">
          <Image
            src="/authentication/loginImg.svg"
            alt="Login Image"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="sm:w-1/2 flex flex-col">
          <Image
            src="/authentication/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="sm:w-[30%] w-[50%] mx-auto mt-8 2xl:mt-10"
          />
          <Typography variant="large" className=" text-center -mt-8 uppercase">
            Register
          </Typography>
          <Typography variant="h6" weight="bold" className="text-center 2xl:mt-4 mt-2">
            Register to Create Account
          </Typography>

          <div className="sm:mx-12 mx-3 flex-1">
            <div className="flex flex-col lg:flex-row justify-center 2xl:mt-10 sm:gap-3 mt-7">
              <TextField placeholder="First Name" icon={<IoPersonOutline size={24} />} />
              <TextField
                placeholder="Last Name"
                icon={<IoPersonOutline size={24} />}
                className="mt-3 sm:mt-0"
              />
            </div>

            <TextField placeholder="Email" icon={<GoMail size={24} />} className="mt-3 2xl:mt-6" />
            <PasswordField placeholder="Password" className="mt-3 2xl:mt-6" />
            <Button title="Register" variant="primary" className="w-full mt-3 2xl:mt-6" />
            <Typography variant="large" className="text-center 2xl:mt-7 mt-4" weight="medium">
              Continue as Guest
            </Typography>
            <Typography variant="large" className="text-center 2xl:mt-13 mt-10" weight="medium">
              OR
            </Typography>
            <Button
              title="Continue with Google"
              iconPosition="left"
              icon={<FaGoogle className="text-primary-500" />}
              variant="outline"
              className="w-full mt-8 2xl:mt-11"
            />
            <Typography variant="large" className="text-center 2xl:mt-10 mt-7">
              Already Have Account? <span className="font-medium">Login</span>
            </Typography>
            <Typography
              variant="large"
              className="text-center 2xl:mt-9 mt-6 mx-auto w-[400px]"
              color="textBrand"
            >
              By Register You Are agree to our{' '}
              <span className="font-medium text-gray-700">Terms of Service & Privacy Policy</span>
            </Typography>
          </div>
        </div>
      </section>
    </>
  )
}
