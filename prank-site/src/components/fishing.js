import * as React from 'react';
import { Link } from "react-router-dom";
import Countdown from 'react-countdown'
export default function fishing() {
    return (
        <div className="profile">
            {/* ここのカウントダウンなどのアレを書く */}
            <h1>登録完了</h1>
         </div>
        <div>
            <Countdown date={Date.now() + 100000} />
        </div>
    )
}