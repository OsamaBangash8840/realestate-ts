import React from 'react'
import { Typography } from '../../common'
import { CiMoneyBill } from 'react-icons/ci'

export const AchievementGrid = () => {
  return (
    <section className="sm:px-16 px-3 mt-5">
      <Typography variant="medium" className=" uppercase">
        ACHIEVEMENT
      </Typography>
      <Typography variant="h5" weight="bold" className="mt-3">
        Achievement of POLYSAVE
      </Typography>
      <div className="grid grid-cols-3 gap-5 mt-3">
        <AchievementCard icon={<CiMoneyBill size={24} />} name="Tanks Sold worldwide" />
        <AchievementCard icon={<CiMoneyBill size={24} />} name="Tanks Sold worldwide" />
        <AchievementCard icon={<CiMoneyBill size={24} />} name="Tanks Sold worldwide" />
      </div>
    </section>
  )
}

interface IAchievementProps {
  icon?: React.ReactNode
  name?: string
}

const AchievementCard = ({ icon, name }: IAchievementProps) => {
  return (
    <>
      <div className="bg-primary-100 rounded-[14px] py-4 px-3">
        <p className="bg-primary-200 rounded-[10px] px-3 py-1.5 w-[46px]">
          <span className="flex justify-center">{icon}</span>
        </p>
        <Typography variant="large" className="my-3">
          {name}
        </Typography>
      </div>
    </>
  )
}
