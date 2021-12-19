import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp 2.0</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      {/*<h1>Let's do Whatsapp 2.0</h1>*/}
      <Sidebar />
    </div>
  );
}
