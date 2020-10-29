import Layout from '../components/layout'
import { fetchEntry } from '../components/client'
import Lightbox from '../components/lightbox'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function About() {

  const [ entry, setEntry ] = useState({})
  useEffect(() => {
    async function getPosts() {
      const fetchedEntry = await fetchEntry("5AJ78GeiUaObMBVvWXJIpo")
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
            <div className={styles.aboutcontent}>
              {
                documentToReactComponents(entry.fields.text)
              }
            </div>
          </div>
          <div>
           <img className={styles.aboutimage} src={entry.fields.image.fields.file.url}/>
          </div>
        </div>
      }
    </Layout>
  )
}
