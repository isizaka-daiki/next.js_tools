import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from 'history';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Sidebar from './sidebar'
import Ip_check from './Ip_check'

export default function Home({ allPostsData }) {
	const history = createMemoryHistory();
	return (
	// <Layout home>
	<>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		{/* <Sidebar/> */}
		{/* <main>
			<Ip_check/>
		</main> */}
		{/* <Link href="/sidebar">
			<a>サイドバー</a>
		</Link> */}
	</>
	// </Layout>
	)
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
