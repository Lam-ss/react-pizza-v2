import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlok = () => {
  return (
    <div className={styles.root}>
        <h1>
            <span>:)</span>
            <br />
            ничего не найдено
        </h1>
        <p className={styles.description}>К сожалению данная страница отсутствует в нашем интернет магазине</p>
    </div>
  )
}

export default NotFoundBlok;
