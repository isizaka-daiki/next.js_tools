import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

export default function Enviorment_variable_check({ res_headers }) {
    // console.log(res_headers);
    const a = res_headers.host;
    const afterObject = Object.keys(res_headers).reduce(
        (after, key) => ({
          ...after,
          [key]: res_headers[key]
        }),
        {}
    );
    const res_headers_list = Object.entries

    return(
        <div>
            <p className="section_title">環境変数解析ツール</p>
            <p className="section_explain">サーナーに届く貴方のPCの環境変数が表示されます。</p>
            <form>
                <TableContainer style={{ backgroundColor: "white", width: "800px" }}>
                    <Table className="" aria-label="">
                        <TableBody>
                            {Object.entries(res_headers).map(([key, value]) => {
                                return(
                                    <TableRow key="text_count">
                                        <TableCell component="th" scope="row">
                                            {key}
                                        </TableCell>
                                        <TableCell align="">
                                            {value}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res_headers = context.req.headers;
    console.log(context.req.headers);
    return {
        props: {res_headers}
    }
}