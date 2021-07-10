import React from 'react'
import styles from '../styles/components/menuButton.module.css'

interface buttonProps {
  text: string;
  imgPath: string;
}

const MenuButton = (props: buttonProps) => {
  return (
    <div className={styles.outerContainer}>
      <img className={styles.buttonLogo} src={props.imgPath} alt="" />
      <div className={styles.buttonInnerContainer}>
        <span>{props.text}</span>
      </div>
    </div>
  )
}
export default MenuButton;


