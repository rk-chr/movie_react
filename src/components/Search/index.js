import React from 'react';
import MovieILL from '../../images/movie_night.png';
import style from './index.module.css';
import axios from '../../../axios';
import Movies from '../Movies';

class Search extends React.Component {
  state = {
    dropMenu: [],
    loadedMenu: false,
  }

  handleChange = e => {
    axios
      .get(`/autocomplete/?q=${e.target.value}`)
      .then(response => {
        const items = [];
        response.data.map(item => items.push({ name: item.name, img: item.image, id: item.url }));
        this.setState({
          dropMenu: items,
          loadedMenu: false,
        });
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loadedMenu: true,
    });
  }

  render() {
    const { dropMenu, loadedMenu } = this.state;
    return (
      <div className="container">
        <div className={style.image}>
          <img src={MovieILL} alt="imdb movie illustrator" />
        </div>
        <div className={style.searchBox}>
          <form onSubmit={this.handleSubmit}>
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
        {dropMenu.length && !loadedMenu > 0 ? (
          <div className={style.dropMenu}>
            {dropMenu.map(ele => (
              <div className={style.titles} key={ele.name}>
                <img src={ele.img} alt="something .." />
                {ele.name}
              </div>
            ))}
          </div>
        ) : null}
        {loadedMenu ? (
          <div className={style.grid}>
            {dropMenu.map(ele => (
              <Movies name={ele.name} img={ele.img} url={ele.id} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
