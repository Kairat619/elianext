import Layout from '@/component/layout/Layout'
import AboutMain from '@/component/main/AboutMain'
import Head from 'next/head'
import React from 'react'

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_HOST;
  const teamDataUrl = `${baseUrl}/api/teamData`;

  try {
    const resTeamData = await fetch(teamDataUrl);
    const teamStaticData = await resTeamData.json();

    return {
      props: {
        teamStaticData,
      },
    };
  } catch (error) {
    console.error('Error fetching team data:', error);
    // Handle the error gracefully (e.g., return default data)
    return {
      props: {
        teamStaticData: [], // Or provide default data
      },
    };
  }
};


export default function about({ teamStaticData }) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Developed By Azizur Rahman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
      </Head>
      <>
        <Layout>
          {teamStaticData && <AboutMain teamStaticData={teamStaticData} />}
        </Layout>
      </>
    </>
  )
}
