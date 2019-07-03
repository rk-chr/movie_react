import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import style from './index.module.css';

class Movies extends React.Component {
  render() {
    const { name, img, url } = this.props;
    return (
      <div className={style.card}>
        <Link to={url}>
          <img src={img} alt="movie title" />
          <div className={style.title}>
            <h3>{name}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

Movies.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Movies;
