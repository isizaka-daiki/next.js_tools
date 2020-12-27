import React, { useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';

const Url_encode_decode = () => {

    useEffect(() => {
        console.log("動いた！");
        // dataFetch("今日は日曜日");
    })

    function dataFetch (text) {
        // setText(e.target.value);
        const fetcher = (...args) => fetch(...args).then(res => res.json())
        const appId = "dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-";
        const url = "https://jlp.yahooapis.jp/MAService/V1/parse?appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-&results=ma,uniq&uniq_filter=9%7C10&sentence=" + text;
        // const { data, error } = useSWR(url, fetcher)
        const data = axios.get(url);
        console.log(data);
    }

    return(
        <p>
            a
        </p>
    )
}

export default Url_encode_decode;