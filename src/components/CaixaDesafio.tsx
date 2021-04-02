import { useState, useEffect, useContext } from 'react';
import { DesafioContext } from '../providers/desafiosContext';
import styles from '../style/components/CaixaDesafio.module.css'
export function CaixaDesafio(){
    const {desafioAtivo,resetDesafio,desafioCompletado} = useContext(DesafioContext)
    return(
        <div className={styles.CaixaDesafioContainer}>
            {desafioAtivo ? 
                ( 
                    <div className = {styles.caixaDesafioAtivo}>
                        <header> Ganhe {desafioAtivo.amount}xp</header>
                        <main>
                            <img src={`icons/${desafioAtivo.type}.svg`} alt="body"/>
                            <strong>Novo desafio</strong>
                            <p>{desafioAtivo.description}</p>
                        </main>
                        <footer>
                            <button type = 'button' className = {styles.falheiButton} onClick = {resetDesafio}>Falhei</button>
                            <button type = 'button' className = {styles.completeiButton} onClick = {desafioCompletado}>Completei</button>
                        </footer>
                    </div>
                )
                :
                (
                    <div className = {styles.caixaDesafioNotActive}>
                        <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                        <p>
                            <img src="icons/icon.png" alt="Level Up"/>
                            Complete-os e ganhe experiência para avancar de level.
                        </p>
                    </div>
                )
            }
       </div>
    );
}