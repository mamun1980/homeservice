"use client"

import React from 'react'
import Image from 'next/image'

import { useEffect, useState } from "react";
import GlobalApi from '../_services/GlobalApi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CategorySideBar = () => {
    const params = usePathname()
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()

    useEffect(() => {
        getCategoryList()
    }, [])

    useEffect(() => {
        params&&setSelectedCategory(params.split("/")[2])
    }, [params])

    const getCategoryList = () => {
        
        GlobalApi.getCategory().then(res => {
            setCategoryList(res.categories);
            console.log(res.categories);
        })
    }
    return (
        <div>
            <h2 className='font-bold text-primary mb-3'>Categories</h2>
            {categoryList.map((category, index) => (
                <Link href={'/search/'+category.name} key={index} className={
                    `flex gap-2 border rounded-lg mb-2 p-2 md:mr-10 
                    cursor-pointer hover:text-primary hover:shadow-md hover:bg-teal-50 hover:border-primary
                    ${selectedCategory == category.name && 'border-primary shadow-md bg-teal-100'}`
                }>
                    <Image src={category.icon.url} width={30} height={30} alt='image' />
                    <h2>{category.name}</h2>
                </Link>
            ))}
            
        </div>
    )
}

export default CategorySideBar
