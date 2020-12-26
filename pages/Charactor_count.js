import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';


export default function Charactor_count() {

    const [text, setText] = useState("");

    const handleChange = e => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    const text_count = text.length;
    const exclude_br_text_count_ = text.replace(/\r?\n/g,"").length;

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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="chown_down" style={{margin: "20px 0 15px 0"}}><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg>
            <form>
                <TableContainer style={{ backgroundColor: "white", width: "800px" }}>
                    <Table className="" aria-label="">
                        <TableBody>
                            <TableRow key="text_count">
                                <TableCell component="th" scope="row">
                                    文字数
                                </TableCell>
                                <TableCell align="">
                                    {text_count}
                                </TableCell>
                            </TableRow>
                            <TableRow key="exclude_br_text_count_">
                                <TableCell component="th" scope="row">
                                    文字数(改行除く)
                                </TableCell>
                                <TableCell align="">
                                    {exclude_br_text_count_}
                                </TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell colSpan={6} />
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
        </div>
    )
}