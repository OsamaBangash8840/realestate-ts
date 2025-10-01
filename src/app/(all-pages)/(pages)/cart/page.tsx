import { CartItemList } from '@/app/components/cart'
import { CartSidebar } from '@/app/components/cart/CartSidebar'
import Breadcrumbs from '@/app/components/common/BreadCrumbs'
import { NextPage } from 'next'

const Mock_Cart_Items = [
  {
    id: '1',
    title: 'PolySave GRP Panels',
    price: 199.99,
    image: '/home/bg2.svg',
    category: 'Home',
  },
  {
    id: '2',
    title: 'PolySave GRP Panels',
    price: 199.99,
    image: '/home/bg2.svg',
    category: 'Home',
  },
  {
    id: '3',
    title: 'PolySave GRP Panels',
    price: 199.99,
    image: '/home/bg2.svg',
    category: 'Home',
  },
]

const CartPage: NextPage = () => {
  return (
    <>
      <div className="py-8 px-3 sm:px-16">
        <Breadcrumbs />
        <div className="mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Product List (70%) */}
            <div className="lg:col-span-2">
              <CartItemList items={Mock_Cart_Items} />
            </div>

            {/* Right: Coupon & Checkout (30%) */}
            <div className="lg:col-span-1">
              <CartSidebar items={Mock_Cart_Items} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
