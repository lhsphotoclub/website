import "react"
import styles from "../styles/Layout.module.scss"
import Head from 'next/head'
import Link from 'next/link'

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>{`${props.title} - LHS Photo Club`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.body}>
                <div className={styles.head}>
                    <div className={styles.logo}>
                        <div className={styles.text}>
                            LHS <br/>Photo <br/>Club
                        </div>
                    </div>
                    <ul className={styles.links}>
                        <li><Link href="/">ABOUT</Link></li>
                        <li><Link href="/members">MEMBERS</Link></li>
                        <li><Link href="/alumni">ALUMNI</Link></li>
                        <li><Link href="/events">EVENTS</Link></li>
                        <li><Link href="/resources">RESOURCES</Link></li>
                    </ul>
                </div>
                <div className={styles.content}>
                    {props.children}

                    <footer className={styles.footer}>
                        © Copyright 2020. Lexington High School Photography Club.
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Layout