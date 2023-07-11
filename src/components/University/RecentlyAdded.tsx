import Image from 'next/image'
import React from 'react'

const RecentlyAdded = () => {
  return (
    <div className='py-10'>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/BUET_LOGO.svg/1200px-BUET_LOGO.svg.png"
                    alt="Description"
                    width={100}
                    height={50}
                    className="w-3/12 "
                /> 
                <h2>Bangladesh University Of Engineering and Technology</h2>
    </div>
  )
}

export default RecentlyAdded