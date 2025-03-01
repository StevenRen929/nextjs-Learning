import React from 'react'

 const HomePageNavBar = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <p className='text-2xl'>HomePage-owned navbar</p>
        {children}
    </div>
  )
}

export default HomePageNavBar