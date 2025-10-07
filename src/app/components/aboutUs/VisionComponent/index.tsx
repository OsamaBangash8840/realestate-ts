import { Typography } from '../../common'

export const VisionComponent = () => {
  return (
    <>
      <div className="sm:flex items-center sm:px-16 px-3 mt-10 gap-3">
        <div>
          <Typography
            variant="h6"
            weight="bold"
            className=" uppercase"
            color="custom"
            customColor="text-secondary-400"
          >
            MISSION
          </Typography>
          <Typography variant="xlarge" className=" leading-7 mt-2.5">
            To provide innovative and sustainable water storage solutions that address the needs of
            households, businesses, and industries across Dubai and the region, while upholding the
            highest standards of quality, safety, and trust.
          </Typography>
        </div>
        <div>
          <Typography
            variant="h6"
            weight="bold"
            className=" uppercase"
            color="custom"
            customColor="text-secondary-400"
          >
            MISSION
          </Typography>
          <Typography variant="xlarge" weight="regular" className=" leading-7 mt-2.5">
            To provide innovative and sustainable water storage solutions that address the needs of
            households, businesses, and industries across Dubai and the region, while upholding the
            highest standards of quality, safety, and trust.
          </Typography>
        </div>
      </div>
    </>
  )
}
