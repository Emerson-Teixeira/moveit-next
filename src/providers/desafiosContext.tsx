import {createContext, useState, ReactNode, Dispatch, useEffect} from 'react'
import desafios from '../../challenges.json'
interface Desafio{
    type: 'body' | 'eye';
    description: string
    amount: number;

}
interface desafioContextData{
    level: number;
    currentExp:number;
    desafiosCompletos:number;
    levelUp: () => void;
    iniciaNovoDesafio: () => void;
    desafioAtivo: Desafio;
    resetDesafio: () => void;
    experienceToNextLevel: number;
    desafioCompletado:() => void
}
interface desafioProviderProps{
    children: ReactNode;
}

export const DesafioContext = createContext({} as desafioContextData);

export function DesafioContextProvider({children}: desafioProviderProps){

    const [level,setLevel] = useState(1);
    const [currentExp,setCurrentExp] = useState(0);
    const [desafiosCompletos,setDesafiosCompletos] = useState(0);
    const [desafioAtivo,setDesafioAtivo]:[Desafio,Dispatch<any>] = useState(null);

    function levelUp(){
        setLevel(level + 1)
    }
    const experienceToNextLevel = Math.pow((level+1)*4,2)
    function iniciaNovoDesafio(){
        const desafioAleatorioIndex = Math.floor(Math.random() * desafios.length)
        const desafioGerado = desafios[desafioAleatorioIndex]
        setDesafioAtivo(desafioGerado)
        if(Notification.permission === 'granted'){
            new Notification('Novo Desafio :) ',{
                body: `Complete e ganhe ${desafioGerado.amount}xp`
            })
         }
    }
    function resetDesafio(){
        setDesafioAtivo(null)
    }
    function desafioCompletado(){
        if(!desafioAtivo){
            return
        }
        const {amount} = desafioAtivo
        let finalExperience = currentExp + amount
        if (finalExperience >= experienceToNextLevel){
            levelUp()
            finalExperience = finalExperience - experienceToNextLevel;
        }
        setCurrentExp(finalExperience)
        setDesafiosCompletos(desafiosCompletos+1)
        setDesafioAtivo(null)
    }
    useEffect(()=>{Notification.requestPermission()},[])
    return(
        <DesafioContext.Provider value = {{level,currentExp,desafiosCompletos,levelUp,iniciaNovoDesafio,desafioAtivo,resetDesafio,experienceToNextLevel,desafioCompletado}}>
            {children}
        </DesafioContext.Provider>
    )
}