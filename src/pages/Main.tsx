import React from 'react'
import styles from './Main.module.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MainContent from '../components/MainContent/MainContent'

const Main: React.FC = () => {
  return (
    <>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  )
}

export default Main