
import styles from './Activities.module.css'
export function Activities({children} ) {

    return(
        <section className={styles.Activities}>
            <p>activité quotidienne</p>
            <>
                { children }
            </>
        </section>
    )
}