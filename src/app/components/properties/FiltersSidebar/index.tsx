import { Typography } from '../../common'

export const FiltersSidebar = () => {
  const checkboxClassName =
    "w-[22px] h-[22px] text-primary-500 border-2 border-gray-300 cursor-pointer rounded-lg focus:ring-brand appearance-none checked:bg-primary-500 checked:border-primary-500 relative checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-0 checked:after:left-0 checked:after:w-full checked:after:h-full checked:after:flex checked:after:items-center checked:after:justify-center"

  return (
    <>
      <aside className="w-[250px]">
        <div>
          <Typography variant="xlarge" weight="medium">
            Tank Size
          </Typography>
          <div className=" space-y-4 mt-5 shadow-one pb-3">
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                400 USG
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                500 USG
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                600 USG
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                700 USG
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                800 USG
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                900 USG
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                1000 USG
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                1100 USG
              </Typography>
            </label>
          </div>

          <Typography variant="xlarge" weight="medium" className="mt-3">
            Price
          </Typography>
          <div className=" space-y-4 mt-5 shadow-one pb-3">
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                Vertical
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                Horizontal
              </Typography>
            </label>
          </div>
          <Typography variant="xlarge" weight="medium" className="mt-3">
            Type
          </Typography>
          <div className=" space-y-4 mt-5 shadow-one pb-3">
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                Vertical
              </Typography>
            </label>
            <label className="flex gap-6 items-center cursor-pointer">
              <input type="checkbox" className={checkboxClassName} />
              <Typography variant="large" className="" weight="regular">
                Horizontal
              </Typography>
            </label>
          </div>
        </div>
      </aside>
    </>
  )
}
