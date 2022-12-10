import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slyder from '../components/slyder'
import ServiceDelivery from '../components/ServiceDelivery'

export default function Home() {
  return (
    <>
      <Head >
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Smart Data  IT Solutions &  Services Template" />
        <title>Smart Data IT Solutions & Services Template</title>
      </Head >
      <div className={`${styles["container-main"]}`}>
        <div>
          <Slyder />
        </div>
        <div className='container'>
          <ServiceDelivery/>
        </div>

      </div>

    </>
  )
}
