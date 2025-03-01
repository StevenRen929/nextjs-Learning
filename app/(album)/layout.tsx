import React from 'react'

 const AlbumLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <p className='text-2xl'>Album-owned navbar</p>
        {children}
    </div>
  )
}

export default AlbumLayout