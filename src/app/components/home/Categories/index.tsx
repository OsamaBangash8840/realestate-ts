import { ICategoriesItem } from '@/app/base/types'
import { Typography } from '../../common'
import Image from 'next/image'

export const CategoriesGrid = () => {
  return (
    <section className="px-3 sm:px-16 py-6">
      <Typography
        variant="medium"
        weight="regular"
        color="custom"
        customColor="text-secondary-400"
        className="uppercase"
      >
        Categories
      </Typography>
      <Typography
        variant="h6"
        weight="bold"
        color="custom"
        customColor="text-secondary-500"
        className="mt-2"
      >
        Shop Our Categories
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
        <CategoryCard title="Appartment" icon="/home/bg1.svg" />
        <CategoryCard title="House" icon="/home/bg2.svg" />
        <CategoryCard title="Shop" icon="/home/bg3.svg" />
        <CategoryCard title="Villa" icon="/home/banner2.jpg" />
        <CategoryCard title="Condo" icon="/home/banner3.jpg" />
        <CategoryCard title="Office" icon="/home/banner5.jpg" />
      </div>
    </section>
  )
}

const CategoryCard = ({ title, icon }: ICategoriesItem) => (
  <>
    <div className="bg-primary-100 rounded-xl px-3">
      <Typography
        variant="large"
        weight="bold"
        color="custom"
        customColor="text-secondary-500"
        className="pt-3"
      >
        {title}
      </Typography>
      <div className="flex justify-end">
        <Image
          src={icon ?? ''}
          alt="Category Img"
          width={100}
          height={100}
          className=" w-[128px] h-[100px]"
        />
      </div>
    </div>
  </>
)
