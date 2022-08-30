import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Roles from '../components/RolesList'
import Players from '../components/PlayersList'
import RolesBar from '../components/RolesBar'
import PlayersBar from '../components/PlayersBar'
import { Box, Stack } from '@mui/material'
import RandomizeButton from '../components/RandomizeButton'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spicy Ma Sói Helper</title>
        <meta name="description" content="Assign Ma Soi roles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Spicy Ma Sói Helper
        </h1>

        <Box sx={{ display: 'flex'}}>
          <Stack justifyContent="top" alignItems="center" spacing={2}>
            <h1>Roles</h1>
            <RolesBar />
            <Roles />
          </Stack>

          <Stack justifyContent="top" alignItems="center" spacing={2}>
            <h1>Players</h1>
            <PlayersBar />
            <Players />
          </Stack>
        </Box>

        <RandomizeButton />

      </main>
    </div>
  )
}
