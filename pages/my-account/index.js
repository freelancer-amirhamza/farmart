import Auth from '@/app/components/auth'
import Breadcrumb from '@/app/components/shared/Breadcrumb'
import React from 'react'

const index = () => {
  return (
    <main>
      <div className="bg-[#F5F5F5] py-5">
        <div className="mx-auto max-w-5xl ">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "My Account" }]}
          />
        </div>
      </div>
      <Auth/>
    </main>
  )
}

export default index