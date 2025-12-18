import TopBody from '@/components/TopBody'
import Header from '@/components/Header'
import CenterBody from '@/components/CenterBody'
import TechSlider from '@/components/TechSlider'
import BottomBody from '@/components/BottomBody'
import Head from 'next/head'
import React from 'react'
import AccessMe from '@/components/AccessMe'

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-800 font-sans antialiased">
      <Head>
        <title>محمدحسین دادگسترنژاد | توسعه‌دهنده فول‌استک</title>
        <meta name="description" content="رزومه حرفه‌ای محمدحسین دادگسترنژاد - توسعه‌دهنده فول‌استک" />
        <meta name="keywords" content="آموزش, برنامه نویسی, seo, nextjs, Resume, رزومه, محمدحسین دادگسترنژاد" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gold-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-navy-900/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Header />
      <TopBody />
      <CenterBody />
      <TechSlider />
      <BottomBody />
      <AccessMe />
    </div>
  )
}