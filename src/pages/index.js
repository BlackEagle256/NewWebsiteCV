import TopBody from '@/components/TopBody'
import Header from '@/components/Header'
import CenterBody from '@/components/CenterBody'
import BottomBody from '@/components/BottomBody'
import Head from 'next/head'
import React from 'react'
import AccessMe from '@/components/AccessMe'

export default function index() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Head>
        <title>خانه | سایت من</title>
        <meta name="description" content="سایت رزومه ای محمدحسین دادگسترنژاد" />
        <meta name="keywords" content="آموزش, برنامه, برنامه نویسی, seo, nextjs, Resume , رزومه, محمدحسین دادگسترنژاد, محمدحسین,دادگستر, دادگسترنژاد, دادگستر,Mohammmad Hosein, Dadgostar, Mohammad Hosein Dadgostar,Mohammad Hosein Dadgostar Nejhad, Dadgostar Nejhad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <TopBody />
      <CenterBody />
      <BottomBody />
      <AccessMe />
    </div>
  )
}
