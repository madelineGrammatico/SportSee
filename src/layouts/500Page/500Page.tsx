import styles from './500Page.module.css'

export function Page500() {
    return(
        <main>
            <div className={styles["page500__message"]}>
            <h2>Une erreur interne du serveur est survenue</h2>
            <a href="/" className={styles["page500__link"]}>Actualiser</a>
            </div>
        </main>
    )
}