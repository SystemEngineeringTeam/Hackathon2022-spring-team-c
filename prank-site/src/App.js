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

  componentDidMount() {
    // イベントの設定
    if (window.performance) {
      if (window.performance.navigation.type === 1) {
        alert("リロードしても無駄ですよ");
      } else if (window.performance.navigation.type === 2) {
        alert("お帰りなさい。待ってたよ。")
      }
    }
  }

  componentWillUnmount() {
    // イベントの設定解除
    window.removeEventListener('beforeunload', this.onUnload);
    if (window.performance) {
    }
  }

  onUnload(e) {
    // e.preventDefault();
    e.returnValue = '逃げれませんよ';
  }
  componentDidMount() {
    // イベントの設定
    if (window.performance) {
      if (window.performance.navigation.type === 1) {
        alert("リロードしても無駄ですよ");
      } else if (window.performance.navigation.type === 2) {
        alert("お帰りなさい。待ってたよ。")
      }
    }
  }

  componentWillUnmount() {
    // イベントの設定解除
    window.removeEventListener('beforeunload', this.onUnload);
    if (window.performance) {
    }
  }

  onUnload(e) {
    // e.preventDefault();
    e.returnValue = '逃げれませんよ';
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ show: true })}
        >
          Alert
        </button>
        <SweetAlert
          show={this.state.show}
          title="Demo Complex"
          text="SweetAlert in React"
          showCancelButton
          onConfirm={() => {
            console.log('confirm');
            alert("hogehoge")
            this.setState({ show: false });
          }}
          onCancel={() => {
            console.log('cancel');
            alert("fugafuga")
            this.setState({ show: false });
          }}
          onEscapeKey={() => this.setState({ show: false })}
          onOutsideClick={() => this.setState({ show: false })}
        />
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