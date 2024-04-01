"use client"

import GlobalApi from '@/app/_services/GlobalApi'
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo'

const page = ({params}) => {
    const [business, setBusiness] = useState()
    const {data, status} = useSession()

    const checkIsAuthenticated = () => {
        if(status=='loading') {
            return (
                <h1>Loading...</h1>
            )
        }
    
        if(status == "unauthenticated") {
            signIn("descope")
        }
    }

    useEffect(() => {
        checkIsAuthenticated()
    }, [])

    useEffect(() => {
        getBusinessListById()
    }, [params])

    const getBusinessListById = () => {
        
        GlobalApi.getBusinessListById(params.businessId).then(res => {
            setBusiness(res.businessList);
            console.log(res.businessList);
        })
    }

    
    return status == "authenticated" && (
        <div className='py-8 md:py-20 px-10 md:px-36'>
            <BusinessInfo business={business} />
        </div>
    )
}

export default page
