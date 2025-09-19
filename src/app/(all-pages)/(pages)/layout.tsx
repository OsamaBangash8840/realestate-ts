import { Header } from '@/app/components/layout'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
