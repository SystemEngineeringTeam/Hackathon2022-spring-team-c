import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import money from "./static/money.png";
import Axios from 'axios';
import SweetAlert from 'sweetalert2-react';

function Home() {
  return (
    <div>
      home pageです
    </div>
  );
}

function Profile() {
  return (
    <div>
      <img src={money} alt="金" height="250px"/>
      {/* profile pageです */}
      <h1>儲ける方法</h1>
      <p>何もせずに月300万稼ぐ方法があります。</p>
      <p>そんな夢のような方法をお教えします。あなたも億万長者になりましょう。</p>
      <button>もっと詳しく</button>
      <div id="overlay">
        <div id="content">
          <p>これがモーダルウィンドウです</p>
          <p><button>close</button></p>
        </div>
      </div>
    </div>
  );
}

export class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.setState({ show: true })}>Alert</button>
          <SweetAlert
            show={this.state.show}
            title="Demo"
            text="sds sdsnewlen(const void *init, size_t initlen){struct sdshdr *sh; sh = zmalloc(sizeof(struct sdshdr)+initlen+1); \n#ifdef SDS_ABORT_ON_OOM \nif (sh == NULL) sdsOomAbort();\n#else\n    if (sh == NULL) return NULL; \n#endif \nsh->len = initlen; \nsh->free = 0;\n if (initlen) { \nif (init) memcpy(sh->buf, init, initlen);\n     else memset(sh->buf,0,initlen); \n }\nsh->buf[initlen] = '0';\nreturn (char*)sh->buf; \n} "
            
            onConfirm={() => this.setState({ show: false })}
          />
        </header>
      </div>
    );
  }


  txt_bom = text => {
    //console.log("input text >>"+text)
    Axios.post('http://127.0.0.1:5000/tet_bom', {
      post_text: text
    }).then(function (res) {
      alert(res.data.result);
    })
  };

  handleSubmit = event => {
    this.txt_bom(this.state.value)
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
}


function Apps() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Apps;