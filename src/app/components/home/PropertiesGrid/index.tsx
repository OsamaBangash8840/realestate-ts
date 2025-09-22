import { IPropertyItems } from '@/app/base/types'
import { Typography } from '../../common'
import { PropertiesCard } from '../../properties'

interface IPropertiesGridProps {
  properties: IPropertyItems[]
  title?: string
  subtitle?: string
  isSwiper?: boolean // New prop to control layout
}

export const PropertiesGrid = ({
  properties,
  title = 'Top Selling',
  subtitle = 'Top Selling Products',
  isSwiper = false,
}: IPropertiesGridProps) => {
  // If used within swiper, only render the header
  if (isSwiper) {
    return (
      <div className="">
        <Typography
          variant="medium"
          weight="regular"
          color="custom"
          customColor="text-secondary-400"
          className=" uppercase"
        >
          {title}
        </Typography>
        <Typography variant="h6" weight="bold" color="custom" customColor="text-secondary-500">
          {subtitle}
        </Typography>
      </div>
    )
  }

  // Regular grid layout
  return (
    <section className="px-3 sm:px-16 py-6">
      <Typography
        variant="medium"
        weight="regular"
        color="custom"
        customColor="text-secondary-400"
        className=" uppercase"
      >
        {title}
      </Typography>
      <Typography variant="h6" weight="bold" color="custom" customColor="text-secondary-500">
        {subtitle}
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {properties.map((property) => (
          <PropertiesCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
