import { IBenefitsItem } from '@/app/base/types'
import { Typography } from '../../common'
import { GoTrophy } from 'react-icons/go'
import { MdSupportAgent } from 'react-icons/md'
import { LiaMedalSolid } from 'react-icons/lia'
import { SlBadge } from 'react-icons/sl'

export const FeaturesList = () => {
  return (
    <section className="">
      <div className="grid grid-cols-2 gap-4 mt-5">
        <FeaturesCard title="Appartment" icon={<SlBadge />} />
        <FeaturesCard title="Appartment" icon={<GoTrophy />} />
        <FeaturesCard title="24 Hour Support" icon={<MdSupportAgent />} />
        <FeaturesCard title="Exceptional Service" icon={<LiaMedalSolid />} />
      </div>
    </section>
  )
}

const FeaturesCard = ({ title, icon }: IBenefitsItem) => (
  <>
    <div className="px-3 py-2 flex items-center">
      <Typography className="w-[46px] h-[46px] flex items-center justify-center rounded-[10px]">
        <span className="text-secondary-500 text-[24px]">{icon}</span>
      </Typography>
      <Typography
        variant="large"
        weight="regular"
        color="custom"
        customColor="text-secondary-500"
        className=""
      >
        {title}
      </Typography>
    </div>
  </>
)
