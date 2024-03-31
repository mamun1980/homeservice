"use client"
import BusinessList from '@/app/_components/BusinessList'
import GlobalApi from '@/app/_services/GlobalApi';
import React from 'react'
import { useEffect, useState } from "react";



const page = ({params}) => {
    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        getBusinessList()
    }, [])

    const getBusinessList = () => {
        
        GlobalApi.getBusinessListByCategory(params.category).then(res => {
            setBusinessList(res.businessLists);
            console.log(res.businessLists);
        })
    }

    return (
    <div className='mt-8'>
        <BusinessList businesses={businessList} />
    </div>
    )
}

export default page
