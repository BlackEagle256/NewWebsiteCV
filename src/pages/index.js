import Body from '@/components/Body'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import Head from 'next/head'
import React from 'react'

export default function index() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Head>
        <title>خانه | سایت من</title>
        <meta name="description" content="این صفحه اصلی سایت Next.js ماست" />
        <meta name="keywords" content="nextjs, seo, آموزش, برنامه نویسی" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <InfoCard />

    </div>
  )
}
