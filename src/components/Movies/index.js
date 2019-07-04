/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import style from './index.module.css';

class Movies extends React.Component {
  handleStorage = () => {
    const { name, img, url } = this.props;
    if (localStorage.getItem('cards')) {
      const arr = JSON.parse(localStorage.getItem('cards'));
      arr.push({ name: `${name}`, img: `${img}`, url: `${url}` });

      localStorage.setItem('cards', JSON.stringify(arr));
    } else {
      localStorage.setItem('cards', JSON.stringify([{ name: `${name}`, img: `${img}`, url: `${url}` }]));
    }
  }

  render() {
    const { name, img, url } = this.props;
    return (
      <div className={style.card} onClick={this.handleStorage}>
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
