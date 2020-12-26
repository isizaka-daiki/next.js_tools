import React from 'react'
import App, { Container } from 'next/app'
import Sidebar from './sidebar';
import '../styles/global.css'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        <Sidebar/>
        <main>
          <Component {...pageProps} />
        </main>
      </>
    )
  }
}