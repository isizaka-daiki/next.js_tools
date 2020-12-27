import React, { useState } from 'react';
// import { useAsyncTask, useAsyncRun, useAsyncTaskFetch } from 'react-hooks-async';
import useSWR from 'swr';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Hinshi_bunkai = () => {

    const [text, setText] = useState("")
    const handleChange = e => {
        setText(e.target.value);
        const appId = "dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-";
        const url = "https://jlp.yahooapis.jp/MAService/V1/parse?appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-&results=ma,uniq&uniq_filter=9%7C10&sentence=" + text;

        console.log(url);
        async function fetch(url){
            const res = await fetch(url)
                            .then(res => alert(res.json))
                            .catch(console.log("errorおきたみたい"))
        }
        // const res = fetch(url)
        //                 .then(res => res.josn)
        //                 .catch(console.log("errorおきたみたい"))

        fetch(url);
        // return false;
    }

    function Profile () {
        const { data, error } = useSWR('/api/user/123', fetcher)
        if (error) return <div>failed to load</div>
        if (!data) return <div>loading...</div>
        // render data
        return <div>hello {data.name}!</div>
      }

    function dataFetch (text) {
        // setText(e.target.value);
        const fetcher = (...args) => fetch(...args).then(res => res.json())
        const appId = "dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-";
        const url = "https://jlp.yahooapis.jp/MAService/V1/parse?appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-&results=ma,uniq&uniq_filter=9%7C10&sentence=" + text;
        const { data, error } = useSWR(url, fetcher)
        console.log(data);
    }

    //関数コンポーネントにしないと使えない

    // const test = () => {
    //     const appId = "dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-";
    //     const url = "https://jlp.yahooapis.jp/MAService/V1/parse?appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-&results=ma,uniq&uniq_filter=9%7C10&sentence=" + "今夜は何食べようか";

    //     const task = useAsyncTaskFetch(url);
    //     useAsyncRun(task);
    //     console.log(task);
    // }

    return(
        <div>
            <p className="section_title">日本語品詞分解ツール</p>
            <p className="section_explain">入力した日本語の文章を品詞分解します。<br/>日本語の学習にお役立て下さい。</p>
            <form>
                <TextareaAutosize
                    rowsMin={4}
                    rowsMax={4}
                    className="input_utill"
                    value={text}
                    onChange={dataFetch}
                />
            </form>
            {/* <button onClick={test}>test</button> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="chown_down" style={{margin: "20px 0 15px 0"}}><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg>
        </div>
    )
}

export default Hinshi_bunkai;