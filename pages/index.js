import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Nav/>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.awal}>
        <div>
        <h1 className={styles.ungu}>Delicious Recipe <br/> & Delicious Food</h1>
        </div>
        <div>
        <Image src="/makanan1.png" width={500} height={500}/>
        </div>
      
      </div>
      
      <h2>Popular For You !</h2>
      <div className={styles.awal}>
      <Image src="/roti.png" width={415} height={415}/>
      <div className={styles.kanan}>
      <h1>Healty Bone Broth <br/> Ramen (Quick and Easy)</h1>
      <hr width={300}/>
      <h3>Quick + Easy Chicken Bone Broth  Ramen- <br/> Healthy chicken ramen in a hurry? That’s right!</h3>
      </div>
      
      
      </div>
      
      <h1>New Recipe</h1>
      <div className={styles.awal}>
      <Image src="/burger.png" width={415} height={415}/>
      <div className={styles.kanan}>
      <h1>Healty Bone Broth <br/> Ramen (Quick and Easy)</h1>
      <hr width={300}/>
      <h3>Quick + Easy Chicken Bone Broth  Ramen- <br/> Healthy chicken ramen in a hurry? That’s right!</h3>
      </div>
      
      
      </div>
      <h1>Popular Recipe</h1>
      <div className={styles.popular}>
        <div>
        <Image src="/kuah kare.png" width={400} height={400}/>
        </div>
      <div>
      <Image src="/siomay.png" width={400} height={400}/>
      </div>
      <div>
      <Image src="/smoothies.png" width={400} height={400}/>
      </div>
      <div>
      <Image src="/cake.png" width={400} height={400}/>
      </div>
      <div>
      <Image src="/salmon.png" width={400} height={400}/>
      </div>
      <div>
      <Image src="/sayur.png" width={400} height={400}/>
      </div>
      <div class="pubble-app" data-app-id="118932" data-app-identifier="118932"></div>
<script type="text/javascript" src="https://cdn.chatify.com/javascript/loader.js" defer></script>
      </div>
      
    </div>
    </div>
      )
}
