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

export interface IBlogPostItems {
  id: string | number
  title: string
  date: string
  readingTime?: string
  description?: string
  image: string // path or url
  slug?: string
}

export interface ITestimonialsItems {
  name?: string
  img?: string
  country?: string
  stars?: number
  desc?: string
}
