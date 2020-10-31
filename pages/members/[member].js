import Layout from '../../components/layout'
import { fetchEntriesWithSlug } from '../../components/client'
import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import styles from '../../styles/Member.module.scss'
import Lightbox from '../../components/lightbox'

export default function MemberDetail() {
    const [member, setMember] = useState({}) 

    const router = useRouter()
    const memberSlug = router.query.member

    console.log(router.query)

    useEffect(() => {
        async function getMember () {
            const entries = await fetchEntriesWithSlug('member', memberSlug)
            setMember(entries[0])
        }

        getMember()
    }, [])

    if ("fields" in member) {
        return (
        <Layout title={member.fields.name}>
            <h1>{member.fields.name}</h1>
            <div className={styles.bio}>{member.fields.bio}</div>
            <Lightbox imageList={member.fields.images} className={styles.imageList} />
        </Layout>
    )} else {return null}
    
}