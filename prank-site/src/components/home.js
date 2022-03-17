import * as React from 'react';
import money from "../static/money.png";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
export default function home() {
    return (
        <div className="profile">
            <img src={money} alt="金" className="bg" />
            <h1>儲ける方法</h1>
            <p>何もせずに月300万稼ぐ方法があります。</p>
            <p>そんな夢のような方法をお教えします。あなたも億万長者になりましょう。</p>
            <Button
                href="/fish" variant="contained"
            >
                もっと詳しく
            </Button>
            {/* <Link to={`/login`}>Go To page1</Link> */}
        </div>
    )
}