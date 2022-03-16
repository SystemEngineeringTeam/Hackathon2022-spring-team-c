import * as React from 'react';
import money from "../static/money.png";
import { Link } from "react-router-dom";
export default function home() {
    return (
        <div className="profile">
            <img src={money} alt="金" className="bg" />
            <h1>儲ける方法</h1>
            <p>何もせずに月300万稼ぐ方法があります。</p>
            <p>そんな夢のような方法をお教えします。あなたも億万長者になりましょう。</p>
            <button onClick={() => this.setState({ show: true })}>もっと詳しく</button>

            <Link to={`/login`}>Go To page1</Link>
        </div>
    )
}