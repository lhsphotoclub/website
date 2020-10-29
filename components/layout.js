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
                    <div className={styles.logo} href="/">
                        <div className={styles.text}>
                            LHS <br/>Photo <br/>Club
                        </div>
                    </div>
                    <ul className={styles.links}>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/members">Members</Link></li>
                        <li><Link href="/alumni">Alumni</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/resources">Resources</Link></li>
                    </ul>
                </div>
                <div className={`${styles.content} ${props.twocol ? styles.twocol : ''}`}>
                    {props.children}

                    <footer className={styles.footer}>
                        © Copyright {new Date().getFullYear()}. Lexington High School Photography Club.
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Layout