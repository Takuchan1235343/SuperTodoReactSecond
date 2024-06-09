import React from 'react'
import ReactDOM from 'react-dom'
import App from './App' // App.jsxコンポーネントをインポート
import './styles.css' // 必要に応じてスタイルをインポート
import './index.css' // 必要に応じてスタイルをインポート

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
// src/App.jsx