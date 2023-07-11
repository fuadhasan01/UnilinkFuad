import Image from 'next/image'
import React from 'react'

const RegisteredUniversity = () => {
  return (
    <div className='flex items-center justify-between bg-blue-400 w-full'>
        <div className='w-fit'>
            <p className='text-xs'>Bangladesh University of Engineering and Technology</p>
        </div>
        <div>
               <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/BUET_LOGO.svg/1200px-BUET_LOGO.svg.png"
                    alt="Description"
                    width={100}
                    height={50}
                    className="w-3/12 bg-red-500 "
                />            
        </div>
    </div>
  )
}

export default RegisteredUniversity