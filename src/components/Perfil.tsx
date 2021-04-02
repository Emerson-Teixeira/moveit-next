import { useContext } from 'react';
import { DesafioContext } from '../providers/desafiosContext';
import styles from '../style/components/Perfil.module.css'
export function Perfil(){
    const {level} = useContext(DesafioContext)
    return(
        <div className = {styles.perfilContainer}>
            <img src="https://avatars.githubusercontent.com/u/76541111?v=4" alt="Emerson Teixera Foto"/>
            <div>
                <strong>Emerson Teixeira</strong>
                <p> <img src="icons/vector.png" alt="Seta level"/> Level {level}</p>
            </div>
        </div>
    );
}