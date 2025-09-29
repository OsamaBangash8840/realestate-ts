import { IBenefitsItem } from '@/app/base/types'
import { Typography } from '../../common'
import { GoTrophy } from 'react-icons/go'
import { MdSupportAgent } from 'react-icons/md'
import { LiaMedalSolid } from 'react-icons/lia'
import { SlBadge } from 'react-icons/sl'

export const SpecificationsGrid = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <SpecificationsCard title="U.S Gallons / جالون الولايات المتحدة" icon={<SlBadge />} />
        <SpecificationsCard title="Liters / لتر" icon={<GoTrophy />} />
        <SpecificationsCard title="M3 / متر مكعب" icon={<MdSupportAgent />} />
        <SpecificationsCard title="Length cm / الطول /سم" icon={<LiaMedalSolid />} />
        <SpecificationsCard title="Width cm / العرض /سم" icon={<LiaMedalSolid />} />
        <SpecificationsCard title="Height cm / الارتفاع /سم" icon={<LiaMedalSolid />} />
        <SpecificationsCard title="Legs / Nos." icon={<LiaMedalSolid />} />
      </div>
    </section>
  )
}

const SpecificationsCard = ({ title, icon }: IBenefitsItem) => (
  <>
    <div className="px-3 py-2 ">
      <Typography className="w-[46px] h-[46px] rounded-[10px]">
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
