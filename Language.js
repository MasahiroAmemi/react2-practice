// Reactをインポートする
import React from 'react';

// Languageクラスを定義する
class Language extends React.Component {
  render() {
    return (
     <div className='language-item'>
        <div className='language-name'>HTML & CSS</div>
        <img className='language-image' src='画像URL' />
      </div> 
      );
  }
}