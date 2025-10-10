import { Button, TextField, Typography } from '../../common'

export const ContactForm = () => {
  return (
    <section className=" mt-8 sm:px-16 px-3 mb-5 overflow-x-hidden">
      <div className="bg-primary-500 p-4 rounded-2xl ">
        <Typography variant="large" color="custom" customColor="text-white" className=" uppercase">
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          weight="bold"
          color="custom"
          customColor="text-white"
          className="my-3"
        >
          Order your first product today and get 10% discount
        </Typography>
        <div className=" sm:flex justify-center gap-2 sm:gap-6 mt-2 mb-3">
          <TextField className="mt-3 sm:mt-0" placeholder="Name" />
          <TextField className="mt-3 sm:mt-0" placeholder="Email" />
        </div>
        <div className=" sm:flex justify-center gap-2 sm:gap-6 mt-2 mb-3">
          <TextField className="mt-3 sm:mt-0" placeholder="Subject" />
          <TextField className="mt-3 sm:mt-0" placeholder="Country" />
        </div>
        <div className=" sm:flex justify-center gap-2 sm:gap-6 mt-2 mb-3">
          <TextField className="mt-3 sm:mt-0" placeholder="Subject" />
          <TextField className="mt-3 sm:mt-0" placeholder="Country" />
        </div>
        <Button title="Send" variant="cart" className="w-full sm:w-auto" />
      </div>
    </section>
  )
}
