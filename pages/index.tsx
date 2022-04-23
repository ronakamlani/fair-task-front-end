import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import PrimaryAnchor from '../src/components/common/PrimaryAnchor'
import SecondaryAnchor from '../src/components/common/SecondaryAnchor'
import DefaultTheme from '../src/components/theme/DefaultTheme'
//import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <DefaultTheme 

    >
      <Head>
        <title>Task1-Remeber me </title>
        <meta name="description" content="Fair Task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen">
        <div className="m-auto">
          <div className='p-5'>
          <PrimaryAnchor
            name="Task1"
            href={"/collection"}
          />
          </div>
          <div className="p-5">
            <SecondaryAnchor
              name="Task2"
              href={"task2"}
              ></SecondaryAnchor>
          </div>
        </div>
      </div>
    </DefaultTheme>
  )
}

export default Home
