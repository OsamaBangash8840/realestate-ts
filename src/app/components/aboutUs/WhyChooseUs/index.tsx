import { CiMoneyBill } from 'react-icons/ci'
import { Typography } from '../../common'

export const WhyChooseUs = () => {
  return (
    <section className="sm:px-16 px-3 mt-10">
      <Typography variant="medium">POLYSAVE</Typography>
      <Typography variant="h5" weight="bold">
        Why Choose PolySave
      </Typography>
      <div className=" sm:grid grid-cols-3 gap-5 mt-3">
        <WhyChooseUsCard
          icon={<CiMoneyBill size={24} />}
          name="Vertical Space Optimization"
          desc="Perfect for areas with limited space"
        />
        <WhyChooseUsCard
          icon={<CiMoneyBill size={24} />}
          name="Vertical Space Optimization"
          desc="Perfect for areas with limited space"
        />
        <WhyChooseUsCard
          icon={<CiMoneyBill size={24} />}
          name="Vertical Space Optimization"
          desc="Perfect for areas with limited space"
        />
        <WhyChooseUsCard
          icon={<CiMoneyBill size={24} />}
          name="Vertical Space Optimization"
          desc="Perfect for areas with limited space"
        />
        <WhyChooseUsCard
          icon={<CiMoneyBill size={24} />}
          name="Vertical Space Optimization"
          desc="Perfect for areas with limited space"
        />
      </div>
    </section>
  )
}

interface IAchievementProps {
  icon?: React.ReactNode
  name?: string
  desc?: string
}

const WhyChooseUsCard = ({ icon, name, desc }: IAchievementProps) => {
  return (
    <>
      <div className="bg-primary-100 rounded-[14px] py-6 px-3 mt-4 sm:mt-0">
        <p className="bg-primary-200 rounded-[10px] px-3 py-1.5 w-[46px] mt-4">
          <span className="flex justify-center">{icon}</span>
        </p>
        <Typography variant="xlarge" weight="medium" className="my-3">
          {name}
        </Typography>
        <Typography variant="large" className="mb-3">
          {desc}
        </Typography>
      </div>
    </>
  )
}
