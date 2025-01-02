import FaqMain from '@/component/main/FaqMain'
import Head from 'next/head'
import React from 'react'
import Layout from '@/component/layout/Layout'

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  const faqDataUrl = `${baseUrl}/api/faqData`;
  try {
    const resFaqData = await fetch(faqDataUrl)
    const faqStaticData = await resFaqData.json()
    return {
      props: {
        faqStaticData,
      }
    }
  } catch (error) {
    console.error('Error fetching faq data:', error);
    // Handle the error gracefully (e.g., return default data)
    return {
      props: {
        faqStaticData: [], // Or provide default data
      },
    };
  }

}

export default function faq({ faqStaticData }) {
  return (
    <>
      <Head>
        <title>FAQ</title>
        <meta name="description" content="Developed By Azizur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          {faqStaticData && <FaqMain faqStaticData={faqStaticData} />}
        </Layout>
      </>
    </>
  )
}
