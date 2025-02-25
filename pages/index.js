import FooterSection from "@/component/footer/FooterSection";
import HeaderSection from "@/component/header/HeaderSection";
import DoorShopMain from "@/component/main/DoorShopMain";
import Head from "next/head";

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  const firstBannerDataUrl = `${baseUrl}/api/firstBannerData`;
  const productStaticDataUrl = `${baseUrl}/api/products`;
  const brandDataUrl = `${baseUrl}/api/brands`;
  const galleryDataUrl = `${baseUrl}/api/gallery`;
  const blogStaticDataUrl = `${baseUrl}/api/blogs`;

  try {
    const resFirstBannerData = await fetch(firstBannerDataUrl)
    const firstBannerData = await resFirstBannerData.json()

    const resProductStaticData = await fetch(productStaticDataUrl)
    const productStaticData = await resProductStaticData.json()

    const resBrandData = await fetch(brandDataUrl)
    const brandData = await resBrandData.json()

    const resGalleryData = await fetch(galleryDataUrl)
    const galleryData = await resGalleryData.json()

    const resBlogData = await fetch(blogStaticDataUrl)
    const blogStaticData = await resBlogData.json()
    return {
      props: {
        firstBannerData,
        productStaticData,
        brandData,
        galleryData,
        blogStaticData,
      }
    }
  } catch (error) {
    console.error('Error fetching  data:', error);
    // Handle the error gracefully (e.g., return default data)
    return {
      props: {
        firstBannerData: [],
        productStaticData: [],
        brandData: [],
        galleryData: [],
        blogStaticData: [],
      },
    };
  }
}


export default function Home({
  firstBannerData,
  productStaticData,
  brandData,
  galleryData,
  blogStaticData
}) {

  return (
    <>
      <Head>
        <title>Arusoul - Cosmetics Shop</title>
        <meta name="description" content="Maintained By Builda.cc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <div className="fz-1-body">
        <HeaderSection />
        {(firstBannerData &&
          productStaticData &&
          brandData &&
          galleryData &&
          blogStaticData) && <DoorShopMain
            firstBannerData={firstBannerData}
            productStaticData={productStaticData}
            brandData={brandData}
            galleryData={galleryData}
            blogStaticData={blogStaticData}
          />}
        <FooterSection />
      </div>
    </>
  )
}
