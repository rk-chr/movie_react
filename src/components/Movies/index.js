import React from 'react';
import Img from '../../images/gatsby-astronaut.png';
import style from './index.module.css';

class Movies extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={style.grid}>
          <div className={style.card}>
            <a href="#">
              <img src={Img} alt="movie title" />
              <div className={style.title}>
                <h3>Gatsby</h3>
              </div>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
