import React from 'react';
import MovieILL from '../../images/movie_night.png';
import style from './index.module.css';

class Search extends React.Component {
  handleChange = e => {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="container">
        <div className={style.image}>
          <img src={MovieILL} alt="imdb movie illustrator" />
        </div>
        <div className={style.searchBox}>
          <form>
            <input
              type="text"
              placeholder="search movie name"
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
