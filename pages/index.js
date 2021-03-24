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
		<p className="section_title">このサイトについて</p>
		<h3 class="text_heading">開発や仕事で役立つオンラインツールサイトです</h3>
		<p className="section_explain">
			自分であるといいなと思ったツールを追加しつつ、便利でかっこいいサイト作りを目指しています。<br/>
			フロントエンドの技術のトレンドを反映させるための壁打ちとしても活用しています。
		</p>
		<h3 class="text_heading">製作者について</h3>
		<p className="section_explain">
			このサイトは東京在住のウェブエンジニアが開発しています<br/>
			ReactとReduxを使用した開発を得意にしています。<br/>
			DBスキーマやAPIの作成等バックエンドの実装も好きで、Laravelとは親友(?)です。<br/>
			AWSも好きでEC2,Cognito,S3,CloudFrontの環境構築も行っています。<br/>
		</p>
		<h3 class="text_heading">このサイトの構成</h3>
		<p className="section_title_explain">
		<p className="section_explain_title">Next.js</p>
		React のフレームワークである、Next.jsを使って構築しました。 Next.js は以下のような特徴があり、このようなサイトをサクッと作るには非常に相性が良かったです。<br/>
		<br/>
		・シンプルなルーティング（ファイルシステムと同じ）<br/>
		・Next.js 自体に API 機能があり、外部APIを使ったAPIなども入れられる<br/>
		・静的サイトにするための書き出し、必要なページだけSSRにする<br/>
		・後述する Vercel との相性が非常に良い<br/><br/>
		<p className="section_explain_title">Vercel</p>
		ホスティングには、Next.js の開発元が作っている静的サイトホスティングサービス「Vercel」を利用しました。<br/>
		<br/>
		・開発元だけあってNext.jsとの相性が抜群<br/>
		・GitHub などと連携し、プッシュするだけでビルド・デプロイしてくれる<br/>
		・Serverless Function 機能があり、NodeJS, Go, Pythonなどのコードが動くAPIを設置可能<br/>
		</p>
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
