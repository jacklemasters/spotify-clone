import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import { getSession } from 'next-auth/react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  justify-center py-2">
      <Head>
        <title>Jack's Spotify Clone App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='flex bg-black h-screen overflow-hidden'>
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}