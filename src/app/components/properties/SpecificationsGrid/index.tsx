import { IBenefitsItem } from '@/app/base/types'
import { Typography } from '../../common'

export const SpecificationsGrid = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <SpecificationsCard title="U.S Gallons / جالون الولايات المتحدة" desc="200" />
        <SpecificationsCard title="Liters / لتر" desc="757.1 L" />
        <SpecificationsCard title="M3 / متر مكعب" desc="0.76" />
        <SpecificationsCard title="Length cm / الطول /سم" desc="138.4" />
        <SpecificationsCard title="Width cm / العرض /سم" desc="95.2" />
        <SpecificationsCard title="Height cm / الارتفاع /سم" desc="108.2" />
        <SpecificationsCard title="Legs / Nos." desc="4" />
      </div>
    </section>
  )
}

const SpecificationsCard = ({ title, desc }: IBenefitsItem) => (
  <>
    <div className="px-5 py-4 bg-primary-100 rounded-[14px]">
      <Typography
        variant="xlarge"
        weight="medium"
        color="custom"
        customColor="text-secondary-500"
        className=""
      >
        {title}
      </Typography>
      <Typography variant="large" weight="regular" className="mt-3">
        {desc}
      </Typography>
    </div>
  </>
)
