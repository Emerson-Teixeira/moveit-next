import { useContext } from 'react';
import { DesafioContext } from '../providers/desafiosContext';
import styles from '../style/components/ExperienceBar.module.css'
export function ExperienceBar(){
    const {currentExp,experienceToNextLevel} = useContext(DesafioContext)
    const percentToNextLevel = Math.round((currentExp*100)/experienceToNextLevel)
    return(
        <header className = {styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style = {{width:`${percentToNextLevel}%`}}>
                    <span className ={styles.currentExperience} style = {{left:`${percentToNextLevel}%`}}> {currentExp}xp</span>
                </div>
            </div>
            <span>{experienceToNextLevel}xp</span>
        </header>
    );
}