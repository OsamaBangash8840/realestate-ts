'use client'
import Breadcrumbs from '@/app/components/common/BreadCrumbs'
import { Sidebar } from '@/app/components/dashboard'
import { useState } from 'react'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <div className="sm:flex sm:px-16 px-3 mt-3 sm:mt-8">
        <div className="">
          <Breadcrumbs />
          <Sidebar
            show={show}
            onHide={() => {
              setShow(false)
            }}
          />
        </div>
        <div className="px-4">{children}</div>
      </div>
    </>
  )
}
