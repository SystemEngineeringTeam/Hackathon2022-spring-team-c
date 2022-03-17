import * as React from 'react';
import { Link } from "react-router-dom";
import Countdown from 'react-countdown'
import './fishing.css';
export default function fishing() {
    return (
            <div className="profile">
                {/* ここのカウントダウンなどのアレを書く */}
                <h1 id="h1">登録完了</h1>
                <p>ご登録ありがとうございます。</p>
                <p>お客様の会員登録が正常に完了しました。</p>
                <p><span className="emphasize">3</span>日以内に<span className="emphasize">4,5000円</span>をお支払いください。</p>
                <p>お支払いが確認できない場合は<span className="emphasize">法的処置</span>を取らせていただきますのでご注意ください。</p>
                <p className="emphasize">間違えて入会した方、退会手続きはサポートダイヤル0120-999-999、
                    またはサポートメールsupport@examle.netまで至急ご連絡ください。</p>
            
                 <div className="countdown">
                    <p>残り時間</p>
                    <Countdown date={Date.now() + 3*(24*60)*60000} className="countnum"/>秒
                </div>
            </div>
    )
}