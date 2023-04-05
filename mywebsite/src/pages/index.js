import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './../../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>

        <Head>
          <title>goalslee's web</title>
          <meta name="description" content="goals's website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-3xl font-bold underline">
          이해민입니다.
        </h1>
      
      </Layout>
    </>
  )
}
