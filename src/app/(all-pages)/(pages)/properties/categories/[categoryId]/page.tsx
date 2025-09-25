import { Dropdown, Pagination, Typography } from '@/app/components/common'
import Breadcrumbs from '@/app/components/common/BreadCrumbs'
import { FiltersSidebar, PropertiesGrids } from '@/app/components/properties'
import { IoIosArrowDown } from 'react-icons/io'

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params

  return (
    <div className="sm:px-16 px-3 pt-6">
      <Breadcrumbs />
      <div className="flex gap-2 mt-10">
        <FiltersSidebar />
        <div>
          <div className="flex justify-between">
            <Typography variant="h6" weight="bold" className="uppercase pb-2">
              {categoryId}
            </Typography>
            <div className="flex gap-7">
              <Typography variant="large" weight="regular" className="cursor-pointer">
                Sort By
              </Typography>
              <Dropdown
                button={
                  <Typography
                    variant="large"
                    weight="regular"
                    className="flex gap-3 justify-center items-center cursor-pointer"
                  >
                    Best Selling
                    <IoIosArrowDown size={18} />
                  </Typography>
                }
                options={[{ label: 'View Profile', href: '' }]}
              />
            </div>
          </div>
          <PropertiesGrids />
          <Pagination />
        </div>
        {/* Fetch and show properties for this category */}
      </div>
    </div>
  )
}
