import utilStyles from '../styles/utils.module.css'
import styles from './navbar.module.css'
import Link from 'next/link'

export default function Navbar({ allContentData }) {
  return (
    <section className={`${utilStyles.headingMd} ${styles.navbar}`}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
            <a href="/resume.pdf">Resume</a>
        </li>
        {allContentData.map(({ id, linkTitle }) => (
          <li className={styles.listItem} key={id}>
            <Link href="/content/[id]" as={`/content/${id}`}>
              <a>{linkTitle}</a>
            </Link>
          </li>
        ))}
        <li className={styles.listItem}>
          <Link href="/resume.pdf">
            <a>Resume</a>
          </Link>
        </li>
      </ul>
    </section>
  )
}