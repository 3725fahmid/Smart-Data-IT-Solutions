import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home() {
  return (
    <>
    <Head >
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="description" content="Smart Data  IT Solutions &  Services Template"/>
  <title>Smart Data IT Solutions & Services Template</title>
  </Head >
  <div className="container">

    <Header/>

  </div>
  
  </>
)
}
