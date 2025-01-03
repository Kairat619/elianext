import ShopMain from '@/component/main/ShopMain'
import Head from 'next/head'
import React from 'react'
import Layout from '@/component/layout/Layout'

export default function shop() {
  return (
    <>
      <Head>
        <title>Elia Shop</title>
        <meta name="description" content="Developed By Azizur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          <ShopMain />
        </Layout>
      </>
    </>
  )
}
