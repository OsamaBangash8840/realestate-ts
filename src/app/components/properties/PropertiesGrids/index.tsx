import { MockProperties } from '@/app/base/data'
import { PropertiesCard } from '../PropertiesCard'

export const PropertiesGrids = () => {
  return (
    <>
      <div className="sm:grid grid-cols-3 gap-4">
        {MockProperties.map((property) => (
          <PropertiesCard key={property.id} property={property} />
        ))}
      </div>
    </>
  )
}
