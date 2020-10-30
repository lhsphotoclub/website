import Layout from '../components/layout'
import { fetchEntries } from '../components/client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
//import styles from '../styles/Members.module.scss'

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
                <>
                    <h1>Club Leaders</h1>
                    <div>
                        { members.forEach((member) => {
                            if (member.fields.isLeader) {
                                return (
                                    <Link href={`/members/${member.fields.slug}`} style={{
                                        backgroundImage: `url(${member.fields.thumbnail.fields.file.url})`
                                    }}>
                                        <p>{member.fields.name}</p>
                                    </Link>
                                )
                            } else {
                                return null
                            }
                        })}
                    </div>
                    <h1>Members</h1>
                </>
            }
        </Layout>
    )
}