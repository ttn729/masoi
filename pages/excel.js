import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Roles from '../components/RolesList'
import Players from '../components/PlayersList'
import RolesBar from '../components/RolesBar'
import PlayersBar from '../components/PlayersBar'
import { Box, Stack } from '@mui/material'
import RandomizeButton from '../components/RandomizeButton'
import Navbar from '../components/Navbar'

export default function Excel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spicy Ma Sói Helper</title>
        <meta name="description" content="Assign Ma Soi roles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <h1 className={styles.title}>
          Hello a Edric
        </h1>

      </main>
    </div>
  )
}
