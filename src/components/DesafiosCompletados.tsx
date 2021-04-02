import { useContext } from 'react';
import { DesafioContext } from '../providers/desafiosContext';
import styles from '../style/components/DesafiosCompletados.module.css'
export function DesafiosCompletados(){
    const {desafiosCompletos} = useContext(DesafioContext)
    return(
        <div className = {styles.desafiosCompletadosContainer}>
            <span>Desafios Completos</span>
            <span>{desafiosCompletos}</span>
        </div>
    );
}