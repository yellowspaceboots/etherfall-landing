import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Etherfall</title>
        <meta name='description' content='Landing page for Etherfall game' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='preload'
          href='/fonts/wabroye/Waybroye_014.otf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/eringobragh/eringobragh.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/nightmarepills/NightmarePills.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/marigoldwild/Marigoldwild.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/symbols/Symbols.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/MenofNihilist/MenofNihilist.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Image
        className={styles.landingImage}
        src='/Lac Kivu.png'
        alt='background image'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Etherfall
        </h1>

        <p className={styles.description}>
          We flow as one, Fall as many<br />And many fall still
        </p>
        <p className={styles.description}>
          The Neverending, and Calls of Plenty<br />Silence our fighting will
        </p>
        <p className={styles.description}>
          Though we all seek, The Word of the Void<br />We can&apos;t hope to hear
        </p>
        <p className={styles.description}>
          Until we are Lost, We are Found<br />We are One, and we&apos;re still here
        </p>
        <p className={styles.description}>
          -The Lost Teachings of Ether, Book One
        </p>
        {/*       <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </div>

          <div className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </div>

          <div className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </div>

          <div className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </div>
        </div> */}
      </main>

      {/*    <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image src='/CS Logo.png' alt='Etherfall Logo' width={250} height={75} />
        </span>
      </footer> */}
    </div>
  )
}
