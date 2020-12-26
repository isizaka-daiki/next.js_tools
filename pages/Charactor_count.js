import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


export default function Charactor_count() {

    const [text, setText] = useState("");

    const handleChange = e => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    return(
        <div>
            <p className="section_title">テキスト文字数カウントツール</p>
            <form>
                <p className="section_explain">テキストを入力すると文字数がリアルタイムで更新されます。<br/>大学のレポートや論文にお使い下さい。</p>
                <TextareaAutosize
                    rowsMin={4}
                    rowsMax={4}
                    className="input_utill"
                    value={text}
                    onChange={handleChange}
                />
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="chown_down"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg>
            {text}
        </div>
    )
}