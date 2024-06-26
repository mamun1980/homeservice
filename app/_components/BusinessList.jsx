import Image from 'next/image'

import { Button } from '@/components/ui/button';

const BusinessList = ({businesses}) => {

    return (
        <div className='mt-5 mb-5'>
            
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
            {businesses.length > 0 ? businesses.map((business, index) => (
                
                <div key={index} className='shadow-md rounded-lg hover:shadow-md hover:shadow-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
                    <Image src={business?.images[0].url} width={500} height={200} alt={business.name} 
                    className='h-[150px] md:h-[200px] object-cover rounded-lg'/>
                    <div className='flex flex-col items-baseline p-3 gap-1'>
                        <h2 className='p-1 mt-3 bg-teal-200 text-primary rounded-full px-2 text-[12px]'>{business.category.name}</h2>
                        <h2 className='font-bold text-lg'>{business.name}</h2>
                        <h2 className='text-primary'>{business.contactPerson}</h2>
                        <h2 className='text-gray-500 text-sm'>{business.address}</h2>
                        <Button className="mt-3">Book Now</Button>
                    </div>
                </div>
            )): [1,2,3].map((item, index)=>
                    <div key={index} className='h-[300px] w-full bg-slate-200 animate-pulse rounded-lg '>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default BusinessList
