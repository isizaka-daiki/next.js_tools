import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
// import useGeolocation from 'react-hook-geolocation'

function dataFetch(text) {
    // setText(e.target.value);
    const fetcher = url => fetch(url).then(res => res.json())
    const appId = "dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-";
    const url = "https://jlp.yahooapis.jp/MAService/V1/parse?appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-&results=ma,uniq&uniq_filter=9%7C10&sentence=" + text;
    // const { data, error } = useSWR(url, fetcher)

    //pathを取得
    const data = axios.get(url);
    console.log(data);
}

const Url_encode_decode = (props) => {

    const router = useRouter();
            console.log(router.pathname);

    // console.log("getInitialPropsで天気データ取得", props.weather);

    const [piyo, setPiyo] = useState("torisan");


    // function fetcher(...args) {
    //     return fetch(...args).then(response => response.json());
    //   }

    //   const { data1 } = useSWR("https://jlp.yahooapis.jp/MAService/V1/parse?appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-&results=ma,uniq&uniq_filter=9%7C10&sentence=" + "おいしい", fetcher);
    //   console.log(data1);


    useEffect(() => {

        const f = async () => {
            const word = 'hogehoge';
            const response = await axios(`http://localhost:3000/api/${word}`);
            console.log("useEffectの中で処理しています", response);
        }
        f();
    })

    return(
        <p>メンテナンス中です</p>
    )
}

Url_encode_decode.getInitialProps = async function(){

    const res = await fetch("https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&output=json&interval=5&appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-");
    const json = await res.json()

    return {
      weather: json,
    }

}

export default Url_encode_decode;