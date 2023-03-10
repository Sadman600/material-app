import Banner from '@/componants/Banner';
import Products from '@/componants/Products';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <>
      <Head>
        <title>Material App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Banner />
        <Products />
      </main>
    </>
  );
};

export default Home;