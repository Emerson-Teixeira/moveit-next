
import React from 'react'
import { Countdown } from '../components/Countdown'
import { DesafiosCompletados } from '../components/DesafiosCompletados'
import {ExperienceBar} from '../components/ExperienceBar'
import { Perfil } from '../components/Perfil'
import { CaixaDesafio } from '../components/CaixaDesafio'
import styles from '../style/components/Home.module.css'
import Head from 'next/head'
export default function Home() {
  return (
      <div className = {styles.container}>
        <Head>
          <title> Inicio | MoveIt</title>
        </Head>
        <ExperienceBar />
        <section>
          <div className = {styles.leftContainer}>
            <Perfil/>
            <DesafiosCompletados/>
            <Countdown/>
          </div>
          <div>
            <CaixaDesafio/>
          </div>
        </section>
      </div>
      
  )
}
