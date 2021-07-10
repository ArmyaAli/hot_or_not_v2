import React from 'react'
import MenuButton from '../components/menuButton';
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <div className={styles.plusContainer}>
        <img className={styles.plus} src="plus.svg" width="32" height="32" alt="" />
      </div>
      
      <div className={styles.logoContainer}>
        <img src="vector.svg" width="100" height="100" alt="" />
      </div>
      <div className={[styles.heading, styles.text].join(' ')}>Welcome To Twitch Hot or Not</div>
      <div className={[styles.subHeading, styles.text].join(' ')}>The place to rate your favorite streamers in terms of attractiveness</div>
      <MenuButton text="Women" imgPath="female.png"/>
      <MenuButton text="Men" imgPath="male.png"/>
      <MenuButton text="Both" imgPath="both.png"/>
    </div>
  )
}

export default Home;

