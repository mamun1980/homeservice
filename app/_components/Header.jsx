"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'

  

const Header = () => {
    const {data} = useSession()

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <div className='flex p-5 shadow-sm justify-between'>
            <div className='flex items-center gap-8'>
                <Link href={"/"}>
                <Image src="/logo.svg" alt='logo' width={180} height={100} />
                </Link>
                <div className='md:flex items-center gap-6 hidden'>
                    <Link href={"/"}>
                        <h2 className='hover:scale-105 hover:text-primary'>Home</h2>
                    </Link>
                    <Link href={"/services"}>
                    <h2 className='hover:scale-105 hover:text-primary'>Services</h2>
                    </Link>
                    <Link href={"/about"}>
                    <h2 className='hover:scale-105 hover:text-primary'>About Us</h2>
                    </Link>
                    
                </div>
            </div>
            <div>
                {data?.user? 
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger  asChild>
                        <Image src={data.user?.image} 
                            width={40}
                            height={40}
                            alt='user'
                            className='rounded-full'
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>My Booking</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
                            
                        </DropdownMenuContent>
                    </DropdownMenu>

                    :
                    <Button onClick={() => signIn('descope')}>Login / Sign Up</Button>
                }
            </div>
        </div>
    )
}

export default Header
