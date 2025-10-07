import { Button, Typography } from '../../common'

export const BookingService = () => {
  return (
    <section className="bg-primary-100 mt-6">
      <div className="sm:flex items-center justify-between px-3 sm:px-16 py-8 ">
        <div>
          <Typography
            variant="medium"
            className=" uppercase"
            color="custom"
            customColor="text-secondary-400"
          >
            CALL US
          </Typography>
          <Typography variant="h6" weight="bold" className="mt-1.5">
            Schedule Your Professional Tank Cleaning Today
          </Typography>
          <Typography variant="large" className=" mt-3 sm:mt-1.5">
            Dont wait for a problem to arise. Ensure the safety and quality of your water with our
            certified experts
          </Typography>
        </div>
        <div className="flex flex-col items-center">
          <Button title="Book Service" className="mt-6 sm:mt-0 w-full sm:w-auto" />
          <div className="flex gap-1 mt-3">
            <Typography variant="large">Call Us:</Typography>
            <Typography variant="large">+971 50 655 6659</Typography>
          </div>
        </div>
      </div>
    </section>
  )
}
