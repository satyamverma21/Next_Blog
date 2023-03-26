import React from 'react'
import styles from '@/styles/Home.module.css'


const about = () => {
  return (
    <div>
        <nav className={styles.mainnav}><ul>
        <li><a href="/">Home</a> </li>
        <li><a href="/about">About</a></li>
        <li> <a href="/blogs"> Blogs</a></li>
        <li> <a href="/contact">contact</a> </li></ul></nav>
      i am good how anout u!!
    </div>
  )
}

export default about
