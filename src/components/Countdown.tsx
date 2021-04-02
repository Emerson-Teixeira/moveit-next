import { useState, useEffect, useContext } from 'react';
import {DesafioContext} from '../providers/desafiosContext'
import styles from '../style/components/Countdown.module.css'
export function Countdown(){
    const {iniciaNovoDesafio,desafioAtivo} = useContext(DesafioContext)
    const [time,setTime] = useState(0.1*60);
    const [isActive,setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const minutes = Math.floor(time/60);
    const seconds = time%60
    const [ML,MR] = String(minutes).padStart(2,'0').split('') // Caractere Minutos
    const [SL,SR] = String(seconds).padStart(2,'0').split('') // Caractere Segundos
    let countdownTimeout: NodeJS.Timeout
    function startCountdown(){
        setIsActive(true)
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.1*60)
        setHasFinished(false)
    }
    useEffect(()=>{
        if(!desafioAtivo) 
            resetCountdown()
        },[desafioAtivo])
    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(()=>{ 
                setTime(time-1)
            },1000)
        }
        else if(isActive && time == 0){
            setHasFinished(true)
            setIsActive(false)
            iniciaNovoDesafio()

        }
    },[isActive,time])
    return(
        <div>
            <div className ={styles.countdownContainer}>
                <div>
                    <span>{ML}</span>
                    <span>{MR}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{SL}</span>
                    <span>{SR}</span>
                </div>
            </div>
            {hasFinished?(<button disabled type = 'button' className = {`${styles.countdownButton}`}>Ciclo Encerrado</button>):<>
            {!isActive? 
            (<button type = 'button' className = {`${styles.countdownButton}`} onClick  = {startCountdown}>Iniciar Ciclo</button>)
            :
            (<button type = 'button' className = {`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick  = {resetCountdown}>Abandonar Ciclo</button>)}</>}
           
           
        </div>

    );
}