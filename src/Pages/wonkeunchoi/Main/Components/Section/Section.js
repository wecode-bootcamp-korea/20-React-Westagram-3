import React from 'react';
import Article from './Article/Article';
import Aside from './Aside/Aside';

class Section extends React.Component {
  render() {
    return (
      <>
        <section>
          <Article />
          <Aside />
        </section>
      </>
    );
  }
}

export default Section;
