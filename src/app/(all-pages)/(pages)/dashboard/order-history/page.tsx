import { Typography } from '@/app/components/common'
import { OrderHistoryTable } from '@/app/components/dashboard/OrderHistoryTable'
import { NextPage } from 'next'

const OrderHistoryPage: NextPage = () => {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Typography variant="h6" weight="bold">
          Order History
        </Typography>
      </div>
      <OrderHistoryTable />
    </>
  )
}

export default OrderHistoryPage
