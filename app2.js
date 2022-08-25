import React from 'react';
// Languageコンポーネントをインポートする
import Language from "./Language"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>言語一覧</h1>
        <div className="language">
          {/* Languageコンポーネントを呼び出す */}
          <Language/>
          
        </div>
      </div>
    );
  }
}

export default App;
