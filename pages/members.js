import Layout from '../components/layout'
import { fetchEntries } from '../components/client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Members.module.scss'

export default function Members() {
    const [ members, setMembers ] = useState([])
    useEffect(() => {
        async function getEntries() {
            const entries = await fetchEntries('member')
            console.log(entries)
            setMembers([...entries])
        }

        getEntries()
    }, [])
    
    return (
        <Layout title="Members">
            {
                members.length > 0 &&
                <div className={styles.content}>
                    <h1>Club Leaders</h1>
                    <div className={styles.grid}>
                        { members.map((member) => {
                            if (member.fields.isLeader) {
                                console.log(member)
                                return (
                                    <Link key={member.sys.id} href={`/members/${member.fields.slug}`}>
                                        <div className={styles.item} style={{
                                            backgroundImage: `url(${member.fields.thumbnail.fields.file.url})`
                                        }}>
                                            <p>{member.fields.name}</p>
                                        </div>
                                    </Link>
                                )
                            } else {
                                return null
                            }
                        })}
                    </div>
                    <h1>Members</h1>
                    <div className={styles.grid}>
                        { members.map((member) => {
                            if (!member.fields.isLeader) {
                                console.log(member)
                                return (
                                    <Link key={member.sys.id} href={`/members/${member.fields.slug}`}>
                                        <div className={styles.item}>
                                        <div style={{
                                            backgroundImage: `url(${member.fields.thumbnail.fields.file.url})`
                                        }}>
                                            <p>{member.fields.name}</p>
                                        </div>
                                        </div>
                                    </Link>
                                )
                            } else {
                                return null
                            }
                        })}
                    </div>
                </div>
            }
        </Layout>
    )
}