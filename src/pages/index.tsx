import Head from 'next/head';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <title>YourApp | Home</title>
        <meta name="description" content="Welcome to YourApp – the best way to do something great." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <HeroSection />
        <Features />
        <CTA />
      </Layout>
    </>
  );
}
