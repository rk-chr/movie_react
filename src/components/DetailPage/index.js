import React from 'react';
import Img from '../../images/gatsby-astronaut.png';
import style from './index.module.css';

class DetailPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className={style.image}>
          <img src={Img} alt="something" />
        </div>
        <div className={style.detail}>
          <h2>Title</h2>
          <h4>
            <span>Rating: </span>
            4.3
          </h4>
          <div className={style.story}>
            <h4>Storyline</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className={style.cast}>
              <h5>The Cast</h5>
              <img src={Img} alt="cast pics" />
              <img src={Img} alt="cast pics" />
              <img src={Img} alt="cast pics" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
