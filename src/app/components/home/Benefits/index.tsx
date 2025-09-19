import { IBenefitsItem } from '@/app/base/types'
import { Typography } from '../../common'
import { GoTrophy } from 'react-icons/go'
import { MdSupportAgent } from 'react-icons/md'
import { LiaMedalSolid } from 'react-icons/lia'

export const BenefitsGrid = () => {
  return (
    <section className="px-3 sm:px-16 py-6">
      <Typography
        variant="medium"
        weight="regular"
        color="custom"
        customColor="text-secondary-400"
        className="uppercase"
      >
        Benefits
      </Typography>
      <Typography
        variant="h6"
        weight="bold"
        color="custom"
        customColor="text-secondary-500"
        className="mt-2"
      >
        Benefits of Luxus Real Estate
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        <BenefitsCard
          title="Appartment"
          icon={<GoTrophy />}
          desc="Quality guarantees durable and reliable fiberglass solutions."
        />
        <BenefitsCard
          title="24 Hour Support"
          icon={<MdSupportAgent />}
          desc="Round-the-clock support to assist you with all your fiberglass needs."
        />
        <BenefitsCard
          title="Exceptional Service"
          icon={<LiaMedalSolid />}
          desc="Dedicated to delivering outstanding service at every project stage."
        />
      </div>
    </section>
  )
}

const BenefitsCard = ({ title, icon, desc }: IBenefitsItem) => (
  <>
    <div className="px-3 shadow-one rounded-2xl py-2">
      <Typography className="w-[46px] h-[46px] flex items-center justify-center bg-primary-200 rounded-[10px]">
        <span className="text-secondary-500 text-[28px]">{icon}</span>
      </Typography>
      <Typography
        variant="xlarge"
        weight="bold"
        color="custom"
        customColor="text-secondary-500"
        className="pt-3"
      >
        {title}
      </Typography>
      <Typography variant="large" weight="regular" className="my-2">
        {desc}
      </Typography>
    </div>
  </>
)
