import { HomeBanner } from '../Banner'
import { BenefitsGrid } from '../Benefits'
import { CategoriesGrid } from '../Categories'

export const MainHome = () => {
  return (
    <>
      <HomeBanner />
      <CategoriesGrid />
      <BenefitsGrid />
    </>
  )
}
