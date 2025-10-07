import { Button, Typography } from '../../common'

export const AboutContact = () => {
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
            CONTACT US
          </Typography>
          <Typography variant="h6" weight="bold" className="mt-1.5">
            Ready to Secure Your Supply Chain?
          </Typography>
          <Typography variant="large" className=" mt-3 sm:mt-1.5">
            Partner with a top leading distributor who is invested in your growth. Lets discuss your
            material needs and build a solution that <br className="sm:block hidden" /> drives your
            business forward.
          </Typography>
        </div>
        <Button title="Contact Us" className="mt-6 sm:mt-0 w-full sm:w-auto" />
      </div>
    </section>
  )
}
