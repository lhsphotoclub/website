import "react"
import styles from "../styles/Layout.module.scss"
import Head from 'next/head'

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
                        <li>ABOUT</li>
                        <li>MEMBERS</li>
                        <li>ALUMNI</li>
                        <li>EVENTS</li>
                        <li>RESOURCES</li>
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