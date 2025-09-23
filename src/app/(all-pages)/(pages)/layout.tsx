import { OurClients } from '@/app/components/home'
import { Footer, Header } from '@/app/components/layout'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <OurClients />
      <Footer />
    </>
  )
}
