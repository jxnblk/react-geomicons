
import React from 'react'
import cxs from 'cxs'

const Footer = () => {
  const cx = {
    root: cxs({
      paddingTop: 48,
      paddingBottom: 48,
      paddingLeft: 16,
      paddingRight: 16
    }),
    navitem: cxs({
      fontWeight: 'bold',
      padding: 8,
      color: 'inherit'
    })
  }
  return (
    <footer className={cx.root}>
      <a className={cx.navitem} href='https://github.com/jxnblk/react-geomicons'>GitHub</a>
      <a className={cx.navitem} href='https://npmjs.com/package/react-geomicons'>npm</a>
      <a className={cx.navitem} href='http://jxnblk.com'>Made by Jxnblk</a>
    </footer>
  )
}

export default Footer
