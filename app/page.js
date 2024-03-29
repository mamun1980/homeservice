"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";

export default function Home() {
    
    return (
        <>
            <Hero />
            <CategoryList />
            <BusinessList />
            <div className="h-[200px] w-full bg-slate-500">

            </div>
        </>
    );
}
