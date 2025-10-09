import { CiShoppingCart } from 'react-icons/ci'
import { Typography } from '../../common'
import { SiMastercard } from 'react-icons/si'

const userData = {
  totalOrders: 31,
  cancelledOrders: 4,
  recentOrder: {
    orderId: '#ORD-12345',
    dateAndTime: 'October 26, 2023 at 14:30',
    products: [
      {
        category: '200 UGS',
        name: 'PolySave HD Water Tank',
        quantity: 1,
        price: 'AED 249',
      },
      {
        category: '2 x 1 x 1',
        name: 'PolySave GRP Panel Water Tank',
        quantity: 2,
        price: 'AED 249',
      },
    ],
    paymentCard: {
      name: 'MasterCard',
      number: '**** **** **** 4242',
    },
  },
}

export const DashboardComponent = () => {
  return (
    <div className="p-4 mt-3">
      {/* Order Statistics */}
      <div className="flex items-center justify-between gap-4 mb-6 ">
        <div className="flex items-center gap-4 px-3 py-5  sm:w-[450px] 2xl:w-[600px] shadow-one rounded-[14px]">
          <div className="bg-primary-100 text-primary-500 rounded-[10px] p-2 flex items-center justify-center flex-shrink-0">
            <CiShoppingCart size={24} />
          </div>
          <div>
            <Typography variant="h6" weight="bold">
              {userData.totalOrders}
            </Typography>
            <Typography variant="large" className="mt-1.5">
              Total Orders
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-4 px-3 py-5  sm:w-[450px] 2xl:w-[600px] shadow-one rounded-[14px]">
          <div className="bg-primary-100 text-primary-500 rounded-[10px] p-2 flex items-center justify-center flex-shrink-0">
            <CiShoppingCart size={24} />
          </div>
          <div>
            <Typography variant="h6" weight="bold">
              {userData.cancelledOrders}
            </Typography>
            <Typography variant="large" className="mt-1.5">
              Cancel Orders
            </Typography>
          </div>
        </div>
      </div>

      <Typography variant="h6" weight="bold" className="mt-5">
        Active Order
      </Typography>
      <div className="rounded-[14px] mt-6 overflow-hidden ">
        <div className="flex justify-between bg-gray-50 px-3 py-3">
          <Typography variant="xlarge">{userData.recentOrder.orderId}</Typography>
          <Typography variant="xlarge">{userData.recentOrder.dateAndTime}</Typography>
        </div>
        {userData.recentOrder.products.map((index) => {
          return (
            <div key={index.name}>
              <Typography variant="xlarge" className="px-3 py-3">
                {index.category}
              </Typography>
              <div className="flex justify-between items-center px-3 py-3">
                <Typography variant="xlarge" weight="bold">
                  {index.name}
                </Typography>
                <div className="flex gap-3">
                  <Typography variant="large" weight="medium">
                    {index.quantity} x
                  </Typography>
                  <Typography variant="large" weight="medium">
                    {index.price}
                  </Typography>
                </div>
              </div>
            </div>
          )
        })}
        <div className="flex justify-between items-center bg-primary-100 px-3 py-3">
          <div className="flex gap-3 items-center">
            <SiMastercard size={24} />
            <div>
              <Typography variant="xlarge">{userData.recentOrder.paymentCard.name}</Typography>
              <Typography variant="large" className="mt-1.5">
                {userData.recentOrder.paymentCard.number}
              </Typography>
            </div>
          </div>
          <div className="flex justify-between gap-20">
            <Typography variant="xlarge" weight="bold">
              Total <span className="text-[18px] font-normal">(Inclusive of Vat)</span>{' '}
            </Typography>
            <Typography variant="xlarge" weight="bold">
              AED 249.00
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
