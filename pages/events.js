import Layout from '../components/layout'
import { fetchEntries } from '../components/client'
import { useState, useEffect } from 'react'

import styles from '../styles/Events.module.scss'

const DateStringObject = (props) => {
    const calcDate = new Date(props.dateString)
    
    return (
        <>
            {`${calcDate.toLocaleDateString('en-US')} at ${calcDate.toLocaleTimeString('en-US')}`}
        </>    
    )
}

export default function Events() {
    const [beforeEvents, setBeforeEvents] = useState([])
    const [afterEvents, setAfterEvents] = useState([])
    
    useEffect(() => {
        async function getEntries() {
            const entries = await fetchEntries('event')
            const [before, after] = [[], []]

            console.log(entries)

            entries.forEach((entry) => {
                const cDate = new Date(), eDate = new Date(entry.fields.date)  

                if (cDate.getTime() >= eDate.getTime()) {
                    before.push(entry)
                } else {
                    after.push(entry)
                }
            })

            setBeforeEvents([...before])
            setAfterEvents([...after])
        }
        
        getEntries()
    }, [])
    
    return (
        <Layout>
            <div className={styles.content}>
                { afterEvents.length > 0 &&
                    <>
                        <h1>Upcoming Events</h1>
                        <div className={styles.grid}>
                            {
                            afterEvents.map((e) => (
                                <div className={styles.item} key={e.sys.id}>
                                    <img src={e.fields.thumbnail.fields.file.url} />
                                    <h2>{e.fields.title}</h2>
                                    <h3>
                                        <DateStringObject dateString={e.fields.date}/>
                                    </h3>
                                </div>
                            ))
                            }
                        </div>
                    </>
                }
            
            <h1>Past Events</h1>
            <div className={styles.grid}>
                {
                    beforeEvents.map((e) => (
                        <div key={e.sys.id} className={styles.item}>
                            <img src={e.fields.thumbnail.fields.file.url} />
                            <h2>{e.fields.title}</h2>
                            <h3>
                                <DateStringObject dateString={e.fields.date}/>
                            </h3>
                        </div>
                    ))
                }</div>
            </div>
        </Layout>
    )
}