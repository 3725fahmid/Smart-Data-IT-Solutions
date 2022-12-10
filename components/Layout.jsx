import Header from './header'
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
        <div>
      <div className="NavBar"><Header  /></div>
      <div><main>{children}</main></div> 
      {/* <div><Footer /></div>  */}
      </div>
      <style jsx>
        {`
        .NavBar {
          position: stiky;
          background: transparent;
          z-index: 10;
        }
        `}
      </style>
    </>

  )
}