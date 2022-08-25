import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>言語一覧</h1>
        <div className='language'>
          {/* HTML & CSSのpropsを渡す */}
          <Language 
            name="HTML & CSS"
            image="画像ファイル場所"
          />
          {/* JavaScriptのpropsを渡す */}
          <Language 
            name="JavaScript"
            image="画像ファイル場所"
          />
          {/* Reactのpropsを渡す */}
          <Language 
            name="React"
            image="画像ファイル場所"
          />
        </div>
      </div>
    );
  }
}

export default App;