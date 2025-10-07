import { Typography } from '../../common'

export const OurProcess = () => {
  return (
    <section className="sm:px-16 px-3 mt-10">
      <Typography variant="medium">POLYSAVE</Typography>
      <Typography variant="h5" weight="bold">
        Why Choose PolySave
      </Typography>
      <div className=" sm:grid grid-cols-3 gap-5 mt-3">
        <OurProcessCard
          icon="1"
          name="Assessment & Drainage"
          desc="We inspect, test your water, and safely drain the tank, following all environmental guidelines for disposal."
        />
        <OurProcessCard
          icon="2"
          name="Deep Cleaning & Disinfection"
          desc="We mechanically scrub all surfaces and use powerful, safe disinfectants to eliminate 99.9% of harmful bacteria and biofilm."
        />
        <OurProcessCard
          icon="3"
          name="Assessment & Drainage"
          desc="We inspect, test your water, and safely drain the tank, following all environmental guidelines for disposal."
        />
      </div>
    </section>
  )
}

interface IAchievementProps {
  icon?: string
  name?: string
  desc?: string
}

const OurProcessCard = ({ icon, name, desc }: IAchievementProps) => {
  return (
    <>
      <div className="bg-primary-100 rounded-[14px] py-6 px-3 mt-4 sm:mt-0">
        <p className="bg-primary-200 rounded-[10px] px-3 py-1.5 w-[46px] mt-4">
          <span className="flex justify-center text-primary-300 text-[20px] font-bold">{icon}</span>
        </p>
        <Typography variant="xlarge" weight="bold" className="my-3">
          {name}
        </Typography>
        <Typography variant="large" className="mb-3">
          {desc}
        </Typography>
      </div>
    </>
  )
}
