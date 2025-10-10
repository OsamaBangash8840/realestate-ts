import { MockProperties } from '@/app/base/data'
import Breadcrumbs from '@/app/components/common/BreadCrumbs'
import { SingleProperty } from '@/app/components/properties'

interface PageProps {
  params: Promise<{
    categoryId: string
    productId: string
  }>
}

const SinglePropertyPage = async ({ params }: PageProps) => {
  // ✅ MUST await params in Next.js 15+
  const { productId } = await params

  const property = MockProperties.find((p) => p.id === parseInt(productId))

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div className=" lg:px-16 md:px-10 px-3">
      <div className="mt-5">
        <Breadcrumbs />
      </div>
      <SingleProperty property={property} className="" />
    </div>
  )
}

export default SinglePropertyPage
