import { MockProperties } from '@/app/base/data'
import { PropertiesCard } from '../PropertiesCard'

export const PropertiesGrids = () => {
  return (
    <>
      <div className="sm:grid grid-cols-3 [@media(min-width:1900px)]:grid-cols-4 gap-4">
        {MockProperties.map((property) => (
          <PropertiesCard key={property.id} property={property} />
        ))}
      </div>
    </>
  )
}
