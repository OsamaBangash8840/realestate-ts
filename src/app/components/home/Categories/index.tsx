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
        <CategoryCard title="PolySave HD Water Tank" icon="/home/cat1.svg" />
        <CategoryCard title="PolySave GRP Panels Water Tank" icon="/home/cat2.svg" />
        <CategoryCard title="PolySave Road Barriers" icon="/home/cat3.svg" />
        <CategoryCard title="PolySave Fiberless Underground Water Tank" icon="/home/cat4.svg" />
        <CategoryCard title="PolySave Fiberless Aboveground Water Tank" icon="/home/cat5.svg" />
      </div>
    </section>
  )
}

const CategoryCard = ({ title, icon }: ICategoriesItem) => (
  <>
    <div className="bg-primary-100 rounded-xl px-3">
      <div className="flex justify-between sm:items-center py-3 ">
        <Typography
          variant="large"
          weight="bold"
          color="custom"
          customColor="text-secondary-500"
          className=""
        >
          {title}
        </Typography>
        <Image
          src={'/home/uaeImg.svg'}
          alt="Category Img"
          width={100}
          height={100}
          className=" w-[35px] h-[35px]"
        />
      </div>
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
