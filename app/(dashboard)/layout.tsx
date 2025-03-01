import React from 'react'

 const DashboardLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <p className='text-2xl'>Dashboard-owned navbar</p>
        {children}
    </div>
  )
}

export default DashboardLayout