import React from 'react'
import styles from '@/CSS/Spinner.module.css'
import { useGlobalContext } from '@/app/Context/store'
function Spiner() {
    const {Spinner} = useGlobalContext()
  return (
    <>
    {Spinner && <div class={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
    </>
  )
}

export default Spiner