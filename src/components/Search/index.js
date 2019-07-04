/* eslint-disable no-nested-ternary */
import React from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import MovieILL from '../../images/movie_night.png';
import style from './index.module.css';
import instance from '../../../axios';

import Movies from '../Movies';

const { CancelToken } = axios;

let cancel;
class Search extends React.Component {
  state = {
    dropMenu: [],
    loading: false,
    loaded: false,
  }

  handleChange = e => {
    if (cancel !== undefined) {
      this.setState({
        loading: false
      });
      cancel('Cancelling previous request');
    }
    if (e.target.value !== '') {
      this.setState({
        loading: true
      });
      instance
        .get(`/autocomplete/?q=${e.target.value}`, {
          cancelToken: new CancelToken(c => {
            cancel = c;
          }),
        })
        .then(response => {
          const items = [];
          response.data.map(item => items.push({ name: item.name, img: item.image, url: item.url }));
          this.setState({
            dropMenu: items,
            loaded: false,
            loading: false
          });
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { dropMenu, loaded, loading } = this.state;
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center', marginTop: '14px' }}>Imdb Movie Library</h1>
        <div className={style.image}>
          <img src={MovieILL} alt="imdb movie illustrator" />
        </div>
        <div className={style.searchBox}>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="search any movie name"
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </form>
        </div>
        {dropMenu.length && !loaded ? (
          <div className={style.dropMenu}>
            {dropMenu.map((ele, index) => (
              <div className={style.titles} key={String(index)}>
                <Link to={`/movies/${ele.url.split('/')[2]}`}>
                  <img src={ele.img} alt="something .." />
                  {ele.name}
                </Link>
              </div>
            ))}
          </div>
        ) : loading ? (
          <div className={style.dropMenu}>
            <div className="spinner-border text-success"></div>
          </div>
        ) : null}
        {loaded ? (
          <div className={style.grid}>
            {dropMenu.map((ele, index) => (
              <Movies
                key={String(index)}
                name={ele.name}
                img={ele.img}
                url={`/movies/${ele.url.split('/')[2]}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
