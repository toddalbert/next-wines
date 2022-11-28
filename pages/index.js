import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [winelist, setWinelist] = useState()
  useEffect(() => {
    fetch('https://api.sampleapis.com/wines/reds')
      .then(response=>response.json())
      .then(setWinelist)
      .catch(alert)
  }, [setWinelist])
  return (
    <div className={styles.container}>
      <Head>
        <title>Todd's Red Wine List</title>
        <meta name="description" content="Getting Wines from Sample APIs in NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://sampleapis.com/api-list/wines">Todd's Wines!</a>
        </h1>

        <div className={styles.grid}>
          {!winelist
            ? <h2>Loading...</h2>
            : winelist.map(wine => (
              <div key={wine.id} className={styles.card}>
                <h2>{wine.wine} &rarr;</h2>
                <img src={wine.image} alt={wine.wine} height={144} />
                <p>{wine.winery}, {wine.location}</p>
              </div>
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.bocacode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by React and NextJS
        </a>
      </footer>
    </div>
  )
}
