/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Img from '../../images/gatsby-astronaut.png';
import style from './index.module.css';
import axios from '../../../axios';

class DetailPage extends React.Component {
  state = {
    list: {},
  }

  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    const titleId = pathname.split('/').pop();
    axios
      .get(`/movies/${titleId}`)
      .then(res => {
        this.setState({
          list: {
            name: res.data.name,
            img: res.data.image,
            des: res.data.description,
            rating: res.data.aggregateRating.ratingValue,
            actors: res.data.actor,
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {
 name, img, des, rating 
} = this.state.list;
    return (
      <div className="container">
        <div className={style.image}>
          <img src={img} alt="something" />
        </div>
        <div className={style.detail}>
          <h2>{name}</h2>
          <h4>
            <span>Rating: </span>
            {rating}
          </h4>
          <div className={style.story}>
            <h4>Storyline</h4>
            <p>{des}</p>
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

DetailPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DetailPage;
