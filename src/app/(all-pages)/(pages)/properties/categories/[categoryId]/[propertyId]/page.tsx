import { MockProperties } from '@/app/base/data'
import Breadcrumbs from '@/app/components/common/BreadCrumbs'
import { SingleProperty } from '@/app/components/properties'

interface PageProps {
  params: Promise<{
    categoryId: string
    propertyId: string
  }>
}

const SinglePropertyPage = async ({ params }: PageProps) => {
  // ✅ MUST await params in Next.js 15+
  const { propertyId } = await params

  const property = MockProperties.find((p) => p.id === parseInt(propertyId))

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div className="sm:px-16 px-3">
      <div className="mt-5">
        <Breadcrumbs />
      </div>
      <SingleProperty property={property} className="" />
    </div>
  )
}

export default SinglePropertyPage
