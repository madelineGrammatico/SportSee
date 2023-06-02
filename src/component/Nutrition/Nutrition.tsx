import styles from './Nutrition.module.css'
import React from 'react'
import Fire from "../../assets/icone/Fire.svg"
import  Apple from "../../assets/icone/apple.svg"
import  Chicken from "../../assets/icone/chicken.svg"
import  Cheeseburger from "../../assets/icone/cheeseburger.svg"

import { Vignette } from '../Vignettes/Vignette'

type Props = {
    keyData: {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number
    }
}

/**
 * Component for showing the nutritions infos
 * @param keyData the data
 * @return divs with the details of user nutrition
 */
export function Nutrition({keyData}: Props): JSX.Element {
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
                    <Vignette icon={data.icon} color={data.color}/>
                    <div>
                        <p  className={styles["Nutrition__text"]}>{data.value}{data.unit}</p>
                        <p  className={styles["Nutrition__text--light"]}>{data.name}</p>
                    </div>
                </article>
            )}
        </article>
    )
}