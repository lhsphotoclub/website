import Layout from '../../components/layout'
import { fetchEntries } from '../../components/client'
import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import styles from '../../styles/Member.module.scss'

export default function MemberDetail() {
    const [member, setMember] = useState({}) 

    const router = useRouter()
    const { memberSlug } = router.query

    useEffect(() => {
        async function getMember () {
            const entries = await fetchEntries('member', memberSlug)
            console.log(entries)
            setMember(entries[0])
        }

        getMember()
    }, [])

    return (
        <Layout>
            {
            "fields" in member &&
            <>
                <h1>{member.fields.name}</h1>
                <div className={styles.bio}></div>    
            </>
            }
        </Layout>
    )
}