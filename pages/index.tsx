import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>科易智能AI</title>
        <meta
          name="description"
          content="科易智能AI，快速为您提供使用帮助，您可以咨询我任何我们的产品"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <SearchDialog />
        </div>

        <div className="py-8 w-full flex items-center justify-center space-x-6">
          <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
            <Link href="https://kkyi.xyz" className="flex items-center justify-center">
              <p className="text-base mr-2">Built by 科易物联网</p>
              <Image src={'/supabase.svg'} width="20" height="20" alt="Supabase logo" />
            </Link>
          </div>
          <div className="border-l border-gray-300 w-1 h-4" />
         
         
          </div>
        </div>
      </main>
    </>
  )
}
