import Link from 'next/link'
import AdbIcon from '@material-ui/icons/Adb';
import MessageIcon from '@material-ui/icons/Message';
import AppleIcon from '@material-ui/icons/Apple';

export default function Sidebar() {
    return(
        <div className="Sidebar_container">
            <div className="Sidebar_title">
                <p>Next Tools</p>
            </div>
            <div className="Sidebar_categories">
                <div className="Sidebar_category">
                    <div className="Sidebar_CategoryTitle">
                        <AdbIcon color="disabled"/>
                        <p className="Sidebar_CategoryTitle_Text">Web</p>
                    </div>
                    <div className="Sidebar_CategoryTitle_link_container">
                        <Link href="/Ip_check">
                            <a className="Sidebar_CategoryTitle_link">IPアドレス確認ツール</a>
                        </Link>
                        <Link href="/Ip_check">
                            <a className="Sidebar_CategoryTitle_link">YouTube検索ツール</a>
                        </Link>
                        <Link href="/Enviorment_variable_check">
                            <a className="Sidebar_CategoryTitle_link">環境変数解析ツール</a>
                        </Link>
                        <Link href="/Photo">
                            <a className="Sidebar_CategoryTitle_link">SSG画像描画</a>
                        </Link>
                    </div>
                </div>
                <div className="Sidebar_category">
                    <div className="Sidebar_CategoryTitle">
                        <MessageIcon color="disabled"/>
                        <p className="Sidebar_CategoryTitle_Text">Text</p>
                    </div>
                    <div className="Sidebar_CategoryTitle_link_container">
                        <Link href="/Charactor_count">
                            <a className="Sidebar_CategoryTitle_link">文字数カウントツール</a>
                        </Link>
                        <Link href="/Hinshi_bunkai">
                            <a className="Sidebar_CategoryTitle_link">日本語品詞分解ツール</a>
                        </Link>
                        <Link href="/Url_encode_decode">
                            <a className="Sidebar_CategoryTitle_link">URLエンコード・デコードツール</a>
                        </Link>
                    </div>
                </div>
                <div className="Sidebar_category">
                    <div className="Sidebar_CategoryTitle">
                        <AppleIcon color="disabled"/>
                        <p className="Sidebar_CategoryTitle_Text">About</p>
                    </div>
                    <div className="Sidebar_CategoryTitle_link_container">
                        <Link href="/Ip_check">
                            <a className="Sidebar_CategoryTitle_link">このサイトについて</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}