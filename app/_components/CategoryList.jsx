import Image from 'next/image'
import React from 'react'

import { useEffect, useState } from "react";
import GlobalApi from '../_services/GlobalApi';
import Link from 'next/link';

const CategoryList = ({categories}) => {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategoryList()
    }, [])

    const getCategoryList = () => {
        
        GlobalApi.getCategory().then(res => {
            setCategoryList(res.categories);
            console.log(res.categories);
        })
    }

    return (
        <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            
            {categoryList.length > 0 ? categoryList.map((cat, index) => (
                
                <Link href={'/search/'+cat.name}  key={index} className={`flex flex-col items-center justify-center gap-2 bg-teal-500 p-5 rounded-lg hover:scale-110 transition-all ease-in-out`}>
                    <Image src={cat.icon.url} width={50} height={50} alt='icon' />
                    <h2>{cat.name}</h2>
                </Link>
            )): [1,2,3,4,5,6].map((item, index)=>
                    <div key={index} className='h-[120px] w-full bg-slate-200 animate-pulse rounded-lg '>
                    </div>
                )
            }
        </div>

    )
}

export default CategoryList
