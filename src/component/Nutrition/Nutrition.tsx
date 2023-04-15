import styles from './Nutrition.module.css'

import Fire from "../../assets/icone/Fire.svg"
import  Apple from "../../assets/icone/apple.svg"
import  Chicken from "../../assets/icone/chicken.svg"
import  Cheeseburger from "../../assets/icone/cheeseburger.svg"

type Props = {
    keyData: {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number
    }
}
export function Nutrition({keyData}: Props) {
    const dataNutrition = [
        {
            name: "Calories",
            value: keyData.calorieCount /1000,
            unit: "Cal",
            icon: Fire,
            id:0,
            color: "rgba(225, 0, 0, 0.1)"
        },
        {
            name: "Proteines",
            value: keyData.proteinCount,
            unit:"g",
            icon: Chicken,
            id:1,
            color: "rgba(74, 184, 255, 0.1)"
        },
        {
            name: "Glucides",
            value: keyData.carbohydrateCount,
            unit:"g",
            icon: Apple,
            id:2,
            color: "rgb(249, 206, 35, 0.1)"
        },
        {
            name: "Lipides",
            value: keyData.lipidCount,
            unit:"g",
            icon: Cheeseburger,
            id:3,
            color: "rgba(253, 81, 129, 0.1)"
        }
    ]
    return(
        <article className={styles.Nutrition}>
            {dataNutrition.map((data)=> 
                <article className={styles["Nutrition__article"]} key={data.id}>
                    <span className={styles["Nutrition__img"]} style={{background: data.color}}>
                       <img src={data.icon} className={styles["Nutrition__icon"]}/>
                    </span>
                    <div>
                        <p  className={styles["Nutrition__text"]}>{data.value}{data.unit}</p>
                        <p  className={styles["Nutrition__text"]}>{data.name}</p>
                    </div>
                </article>
            )}
        </article>
    )
}