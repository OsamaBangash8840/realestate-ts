import { Button, Typography } from '../../common'

export const ServicesGrid = () => {
  return (
    <section className="sm:px-16 px-3 mt-10">
      <Typography variant="medium" className=" uppercase">
        Services
      </Typography>
      <Typography variant="h5" weight="bold">
        Our Cleaning Services
      </Typography>
      <div className=" sm:grid grid-cols-4 gap-5 mt-3">
        <ServicesCard name="Underground Tanks" />
        <ServicesCard name="Fiberglass Tanks" />
        <ServicesCard name="GRP Sectional Pane Tank & Concerete Tanks" />
        <ServicesCard name="Steel Tanks" />
      </div>
    </section>
  )
}

interface IAchievementProps {
  name?: string
}

const ServicesCard = ({ name }: IAchievementProps) => {
  return (
    <>
      <div className="bg-primary-100 rounded-[14px] py-6 px-3 mt-4 sm:mt-0">
        <Typography variant="xlarge" weight="medium" className="my-1">
          {name}
        </Typography>
        <Button title="Book Service" variant="services" className="mt-8 mb-3" />
      </div>
    </>
  )
}
