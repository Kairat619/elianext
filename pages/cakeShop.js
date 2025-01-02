import FooterSection3 from '@/component/footer/FooterSection3'
import CakeShopMain from '@/component/main/CakeShopMain'
import CakeHeaderWrapper from '@/component/wrapper/CakeHeaderWrapper'
import Head from 'next/head'
import React from 'react'

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  const cakeStaticDataUrl = `${baseUrl}/api/cakes`;
  const thirdBannerStaticDataUrl = `${baseUrl}/api/thirdBannerData`;
  const cakeCategoryStaticDataUrl = `${baseUrl}/api/cakeCategory`
  const cakeSliderStaticDataUrl = `${baseUrl}/api/cakeSlider`
  const cakeClientSliderStaticDataUrl = `${baseUrl}/api/cakeClientSlider`
  const blogStaticDataUrl = `${baseUrl}/api/blogs`;

  try {
    const resCakeStaticData = await fetch(cakeStaticDataUrl)
    const cakeStaticData = await resCakeStaticData.json()

    const resThirdBannerStaticData = await fetch(thirdBannerStaticDataUrl)
    const thirdBannerStaticData = await resThirdBannerStaticData.json()

    const resCakeCategoryStaticData = await fetch(cakeCategoryStaticDataUrl)
    const cakeCategoryStaticData = await resCakeCategoryStaticData.json()

    const resCakeSliderStaticData = await fetch(cakeSliderStaticDataUrl)
    const cakeSliderStaticData = await resCakeSliderStaticData.json()

    const resCakeClientSliderStaticData = await fetch(cakeClientSliderStaticDataUrl)
    const cakeClientSliderStaticData = await resCakeClientSliderStaticData.json()

    const resBlogData = await fetch(blogStaticDataUrl)
    const blogStaticData = await resBlogData.json()
    return {
      props: {
        cakeStaticData,
        thirdBannerStaticData,
        cakeCategoryStaticData,
        cakeSliderStaticData,
        cakeClientSliderStaticData,
        blogStaticData,
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error gracefully (e.g., return default data)
    return {
      props: {
        cakeStaticData: [],
        thirdBannerStaticData: [],
        cakeCategoryStaticData: [],
        cakeSliderStaticData: [],
        cakeClientSliderStaticData: [],
        blogStaticData: [],
      },
    };
  }
}
export default function cakeShop({
  cakeStaticData,
  thirdBannerStaticData,
  cakeCategoryStaticData,
  cakeSliderStaticData,
  cakeClientSliderStaticData,
  blogStaticData,
}) {

  return (
    <>
      <Head>
        <title>Farzaa - Cake Shop</title>
        <meta name="description" content="Developed By Azizur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <CakeHeaderWrapper thirdBannerStaticData={thirdBannerStaticData} />
        <CakeShopMain
          cakeStaticData={cakeStaticData}
          cakeCategoryStaticData={cakeCategoryStaticData}
          cakeSliderStaticData={cakeSliderStaticData}
          cakeClientSliderStaticData={cakeClientSliderStaticData}
          blogStaticData={blogStaticData}
        />
        <FooterSection3 />
      </>
    </>
  )
}
