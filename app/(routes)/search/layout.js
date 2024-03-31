import CategorySideBar from '@/app/_components/CategorySideBar'
import React from 'react'

const layout = ({children}) => {
    return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='hidden md:block'>
                <CategorySideBar />
            </div>
            <div className='md:col-span-3'>
            {children}
            </div>

        </div>
    </div>
    )
}

export default layout
