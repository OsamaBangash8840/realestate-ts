import { SingleBlogComponent } from '@/app/components/blog'
import Breadcrumbs from '@/app/components/common/BreadCrumbs'

export default async function SingleBlogPage() {
  return (
    <div className="sm:px-16 px-3 pt-6">
      <Breadcrumbs />
      <SingleBlogComponent />
    </div>
  )
}
