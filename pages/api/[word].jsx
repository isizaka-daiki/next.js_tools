const xml2js = require('xml2js');
const axios = require('axios');

export default async({ query: { word } }, res) => {

    // console.log(req);

    const config = {
        transformResponse: [(data) => {
          let jsonData;
          const parser = new xml2js.Parser({
            async: false,
            explicitArray: false
          });
          parser.parseString(data, (error, json) => {
            jsonData = json;
          });
          return jsonData;
        }],
    };


    //＊＊＊＊＊＊＊＊＊＊＊品詞分解の取得＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
    const s = await axios.get("https://jlp.yahooapis.jp/MAService/V1/parse?appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-&results=ma,uniq&uniq_filter=9%7C10&sentence=" +  word, config)
                        .then(response => {
                            res.send(response.data)
                        });



    //＊＊＊＊＊＊＊＊＊＊＊useEffectでの天気の取得は完了＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
    // const tenki_response = await axios.get("https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&output=json&appid=dj00aiZpPUZiUzdmZWx0aUt0YiZzPWNvbnN1bWVyc2VjcmV0Jng9NDY-")
    //                             .then(function(response) {
    //                                 res.send(response.data)
    //                             })
    //                             .catch(error => {
    //                                 console.log(error);
    //                             })
    // console.log("天気apiの", tenki_response);

    // res.status(200).json({ "品詞分解:": s, "天気api": "tenki_response"});
   };