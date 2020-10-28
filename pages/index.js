import Layout from '../components/layout'
import { fetchEntry } from '../components/client'
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
        <div className={styles.twoCol}>
          <img src={entry.fields.mainImage.fields.file.url}/>
          {
            unified()
            .use(parse)
            .use(remark2react)
            .processSync(entry.fields.text).result
          }
        </div>
      }
    </Layout>
  )
}
