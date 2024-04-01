import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BusinessInfo = ({business}) => {
    return (
        <div className='md:flex gap-4 items-center'>
            <Image src={business?.images[0]?.url} 
                alt={business.name} width={150}
                height={200}
                className='rounded-full h-[150px] object-cover'
            />
            <div className='flex flex-col gap-2 items-baseline mt-5'>
                <h2 className='text-primary bg-teal-300 rounded-full p-1 px-2 text-lg'>{business?.category?.name}</h2>
                <h2 className='md:text-[40px] text-[25px] font-bold'>{business?.name}</h2>
                <h2 className='flex gap-2 text-gray-500 text-lg'><MapPin /> {business?.address}</h2>
                <h2 className='flex gap-2 text-gray-500 text-lg'><Mail /> {business?.email}</h2>
            </div>
        </div>
    )
}

export default BusinessInfo
