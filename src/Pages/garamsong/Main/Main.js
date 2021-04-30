import React from 'react';
import Nav from './components/Nav';
import StoryBox from './components/StoryBox';
import FeedsBox from './components/FeedsBox';
import RightBox from './components/RightBox';
import './Main.scss';
import './components/common.scss';
import './components/reset.scss';

// import './Main.scss';
// import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="MainGaramsong">
        <Nav />
        <main>
          <section className="contentsBox">
            <div className="leftContent">
              <StoryBox />
              <FeedsBox />
            </div>
            <RightBox />
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
