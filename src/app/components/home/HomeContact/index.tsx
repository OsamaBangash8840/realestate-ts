import { Typography } from '../../common'
import { IoCallOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'

export const HomeContact = () => {
  return (
    <section className="sm:flex justify-center items-center gap-6 sm:px-16 px-3">
      <div className="flex-1  2xl:w-1/2">
        <Typography
          variant="medium"
          weight="regular"
          customColor="text-secondary-400"
          color="custom"
        >
          Location
        </Typography>
        <Typography variant="h5" weight="bold" className="mt-1">
          Our Office Location
        </Typography>
        <div className="px-3 mt-3">
          <Typography variant="xlarge" weight="bold">
            Ajman Head Office
          </Typography>
          <Typography variant="large" weight="regular" className="flex gap-3 items-center mt-2">
            <IoCallOutline size={24} />+ 971 123 456 789
          </Typography>
          <Typography variant="large" weight="regular" className="flex gap-3 items-center mt-3">
            <CiLocationOn size={24} className="flex-shrink-0" />
            Branches: Ajman (Head Office), Abu Dhabi, Al Ain, Dxb Al Qouz, Dxb Al Aweer, Dxb Al
            Rashidiya, Sharjah Sheikh Mohammed Bin Zayed Road, Sharjah Industrial 11, UAQ(Factory)
          </Typography>
        </div>
      </div>
      <div className=" 2xl:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6728862117425!2d71.5454142!3d34.000935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d93d7d174a3be1%3A0x2b00d9909e2c6abe!2sitecExperts%20Pvt%20Ltd%20-%20Leading%20Software%20Developement%20Company%20in%20Pakistan!5e0!3m2!1sen!2s!4v1758545401734!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }} // ✅ fixed
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl w-[390px] h-[420px] sm:w-[600px] sm:h-[450px] 2xl:w-[750px]  mt-5 sm:mt-0 [@media(min-width:1750px)]:w-[900px] [@media(min-width:1750px)]:h-[600px]"
        ></iframe>
      </div>
    </section>
  )
}
