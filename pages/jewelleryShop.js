import FooterSection2 from '@/component/footer/FooterSection2'
import HeaderSection3 from '@/component/header/HeaderSection3'
import JewelleryShopMain from '@/component/main/JewelleryShopMain'
import Head from 'next/head'
import React from 'react'

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  const ornamentsDataUrl = `${baseUrl}/api/ornaments`;
  const testimonialStaticDataUrl = `${baseUrl}/api/testimonialSliderList`;
  const jewelleryGalleryStaticDataUrl = `${baseUrl}/api/jewelleryGallery`;
  const blogStaticDataUrl = `${baseUrl}/api/blogs`;

  try {
    const resOrnamentData = await fetch(ornamentsDataUrl)
    const ornamentsData = await resOrnamentData.json()

    const resTestimonialData = await fetch(testimonialStaticDataUrl)
    const testimonialStaticData = await resTestimonialData.json()

    const resJewelleryGalleryData = await fetch(jewelleryGalleryStaticDataUrl)
    const jewelleryGalleryStaticData = await resJewelleryGalleryData.json()

    const resBlogData = await fetch(blogStaticDataUrl)
    const blogStaticData = await resBlogData.json()

    return {
      props: {
        ornamentsData,
        testimonialStaticData,
        jewelleryGalleryStaticData,
        blogStaticData,
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error gracefully (e.g., return default data)
    return {
      props: {
        ornamentsData: [],
        testimonialStaticData: [],
        jewelleryGalleryStaticData: [],
        blogStaticData: [],
      },
    };
  }
}
export default function jewelleryShop({
  ornamentsData,
  testimonialStaticData,
  jewelleryGalleryStaticData,
  blogStaticData
}) {

  return (
    <>
      <Head>
        <title>Farzaa - Jewellery Shop</title>
        <meta name="description" content="Developed By Azizur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <HeaderSection3 />
        {(ornamentsData &&
          testimonialStaticData &&
          jewelleryGalleryStaticData &&
          blogStaticData) && <JewelleryShopMain
            ornamentsData={ornamentsData}
            testimonialStaticData={testimonialStaticData}
            jewelleryGalleryStaticData={jewelleryGalleryStaticData}
            blogStaticData={blogStaticData}
          />}
        <FooterSection2 />
      </>
    </>
  )
}
