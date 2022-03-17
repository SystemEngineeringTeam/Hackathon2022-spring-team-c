import * as React from 'react';
import { Link } from "react-router-dom";
import Countdown from 'react-countdown'
export default function fishing() {
    return (
        <div>
            <Countdown date={Date.now() + 100000} />
        </div>
    )
}