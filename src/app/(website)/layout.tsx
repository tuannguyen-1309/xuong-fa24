import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <header>HeaderPage</header>
      <main>{children}</main>
      <footer>FooterPage</footer>
    </>
  )
}

export default Layout