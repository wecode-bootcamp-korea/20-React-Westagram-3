import React from 'react';
import Feed from './Feed/Feed';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();

    this.state = {
      feeds: [
        {
          feedTop: {
            authorName: 'suyeon02',
            authorImg:
              'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123271536_359050162036558_1424946650206103847_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2v5XHC4LRQsAX_LtfEj&tn=lwet4BCvlQe948M5&edm=AMY84vgAAAAA&ccb=7-4&oh=147b538e9d11b9e9ee5795071f90c4e6&oe=60A3CFE2&_nc_sid=860c2e',
          },
          feedImg: {
            img:
              'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/176103490_186915709818068_3864201109085152462_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=t1vmOhCoUwcAX_Y9RKG&edm=AAeKFY8AAAAA&ccb=7-4&oh=465960583032f093db8ef464bdd1b716&oe=60A35F69&_nc_sid=c982ba',
          },
          feedContent: {
            content: 'wecode 3주차!!! 모두 홧팅~~^^',
            time: '42분전',
          },
          feedId: 1,
        },
        {
          feedTop: {
            authorName: 'suyeon02',
            authorImg:
              'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/123271536_359050162036558_1424946650206103847_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=2v5XHC4LRQsAX_LtfEj&tn=lwet4BCvlQe948M5&edm=AMY84vgAAAAA&ccb=7-4&oh=147b538e9d11b9e9ee5795071f90c4e6&oe=60A3CFE2&_nc_sid=860c2e',
          },
          feedImg: {
            img:
              'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/176103490_186915709818068_3864201109085152462_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=t1vmOhCoUwcAX_Y9RKG&edm=AAeKFY8AAAAA&ccb=7-4&oh=465960583032f093db8ef464bdd1b716&oe=60A35F69&_nc_sid=c982ba',
          },
          feedContent: {
            content: 'what the...',
            time: '42분전',
          },
          feedId: 2,
        },
      ],
    };
  }

  render() {
    const { feeds } = this.state;

    const list = feeds.map((feedData, index) => (
      <Feed feedInfo={feedData} key={feedData.feedId} />
    ));

    return <ul className="feeds-page">{list}</ul>;
  }
}

export default Feeds;
