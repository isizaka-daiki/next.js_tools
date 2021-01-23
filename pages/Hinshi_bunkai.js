import React, { useState, useEffect } from 'react';
// import { useAsyncTask, useAsyncRun, useAsyncTaskFetch } from 'react-hooks-async';
import useSWR from 'swr';
import axios from 'axios';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const Hinshi_bunkai = () => {

    const [text, setText] = useState('');
    const [data, setData] = useState("")
    const [word_list, setWordList] = useState([]);
    const handleChange = e => {
        setText(e.target.value);
    }
    // const initialState = {
    //     word_list: ''
    // };
    // const [word_list, setWordList] = useState(initialState);
    // const clearState = ( () => {
    //     setWordList({word_list, ...initialState});
    // })


    useEffect(() => {
        const f = async () => {
            const word = 'hogehoge';
            if(text) {
                const response = await axios.post(`/api/hinshi_bunkai`, {
                    params: {
                      // ここにクエリパラメータを指定する
                      search_word: text
                    }
                });
                console.log("useEffectの中で処理しています", response);
                setData(response);
                console.log("これを描画していきます", data);
                console.log("これをmapで回します", response.data.ResultSet.ma_result.word_list);
                // clearState();
                // console.log("これは初期化したword_list", word_list);
                console.log("resのデータの中身です", response.data.ResultSet.ma_result.word_list.word)
                const list_data = response.data.ResultSet.ma_result.word_list.word;
                if(word_list.length === 0) {
                    setWordList(word_list.concat(list_data));
                }
                setWordList(list_data);
                console.log("これはword_list", word_list);
            }
        }
        f();
    }, [text])

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
                    onChange={handleChange}
                />
            </form>
            {/* <button onClick={test}>test</button> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="chown_down" style={{margin: "20px 0 15px 0"}}><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg>

                <div className="result_box">
                {/* word_list.length !== 0をword_list.lengthにするとエラーはなくなるが、表が表示されなくなる */}
                    {word_list.length !== 0 && word_list.map(item => (
                        <div className="result_container">
                            <div className="result_list word_surface">{item.surface}</div>
                            <div className="result_list word_reading">{item.reading}</div>
                            <div className="result_list word_pos">{item.pos}</div>
                        </div>
                    ))}
                </div>
            </div>

    )
}

export default Hinshi_bunkai;