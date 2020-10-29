import Layout from '../components/layout'
import { fetchEntry } from '../components/client'
import Lightbox from '../components/lightbox'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'

import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

export default function Home() {

  const [ entry, setEntry ] = useState({})
  useEffect(() => {
    async function getPosts() {
      const fetchedEntry = await fetchEntry("1eN8P3XZULaR42h01aQcGL")
      console.log(fetchedEntry)
      setEntry(fetchedEntry) 
    }

    getPosts()
  }, [])

  return (
    <Layout title="Home">
      {
        "fields" in entry &&  
        <div className={styles.twocol}>
          <div>
            <img className={styles.mainImage} src={entry.fields.mainImage.fields.file.url}/>
            <div className={styles.content}>
              {
                unified()
                .use(parse)
                .use(remark2react)
                .processSync(entry.fields.text).result
              }
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.linkHead}>
              <h3>Photos</h3>
              <a className={styles.instalink} href="https://instagram.com/lhs.photoclub">From our Instagram</a>
            </div>
            <Lightbox imageList={entry.fields.instagramFeed} className={styles.lb}/>
          </div>
        </div>
      }
    </Layout>
  )
}
