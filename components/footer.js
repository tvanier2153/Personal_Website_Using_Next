import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/tvanier2153" className={styles.footerLink}>
        <img
          src="/images/GitHub-Mark-32px.png"
          className={styles.footerImage}
          alt="Github"
        />
      </a>
      <a href="https://www.linkedin.com/in/thomas-vanier-7a702910a/" className={styles.footerLink}>
        <img
          src="/images/LI-In-Bug.png"
          className={styles.footerImage}
          alt="Github"
        />
      </a>
    </div>
  )
}