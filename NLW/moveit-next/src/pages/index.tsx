import {ExperienceBar} from '../components/ExperienceBar';
import {Profile} from '../components/Profile';
import {CompletedChallenges} from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import React from 'react';
import { CountdowProvider } from '../contexts/CountdowContext';

export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
      <title>Início | move.it</title>
    </Head>
    <ExperienceBar />

    <CountdowProvider>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
    </CountdowProvider>
  </div>
  )
}
