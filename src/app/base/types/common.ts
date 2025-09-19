export interface IMenuItem {
  title: string
  path: string
  icon?: React.ReactNode
  iconActive?: React.ReactNode
  darkIcon?: React.ReactNode
}

export interface ICategoriesItem {
  title?: string
  icon?: string
  bgColor?: string
}

export interface IBenefitsItem {
  title?: string
  icon?: React.ReactNode
  desc?: string
}

export interface IPropertyItems {
  id: string | number
  title: string
  price: number
  originalPrice?: number
  image: string
  category?: string
  rating?: number
  reviews?: number
  discount?: number
  inStock?: boolean
  description?: string
}
