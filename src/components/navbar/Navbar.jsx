import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.logo}>Logo</div> */}
            <Link href="/" className={styles.logo}>Logo</Link>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar