/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import style from './index.module.css';
import axios from '../../../axios';
import SEO from '../seo';

class DetailPage extends React.Component {
  state = {
    list: {},
    loading: true
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
          loading: false,
          list: {
            name: res.data.name,
            img: res.data.image,
            des: res.data.description,
            rating: res.data.aggregateRating.ratingValue,
            actors: res.data.actor,
            datePublished: res.data.datePublished
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps() {
    this.setState({
      loading: true
    })
  }

  componentDidUpdate(prevProps) {
    if (window && window.scrollTo) {
      window.scrollTo(0, document.body.scrollHeight);
    }
    const {
      location: { pathname }
    } = this.props;
    const titleId = pathname.split('/').pop();
    if (titleId !== prevProps.location.pathname.split('/').pop()) {
      axios
        .get(`/movies/${titleId}`)
        .then(res => {
          this.setState({
            loading: false,
            list: {
              name: res.data.name,
              img: res.data.image,
              des: res.data.description,
              rating: res.data.aggregateRating.ratingValue,
              actors: res.data.actor,
              datePublished: res.data.datePublished
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    const {
      name, img, des, rating, actors, datePublished
    } = this.state.list;
    const { loading } = this.state;
    return (
      <React.Fragment>
        <SEO title={name} />
        {
          loading ? (
            <div className={`spinner-grow text-success ${style.spBig}`}></div>
          ) : (
              <div className="container">
                <div className={style.image}>
                  <img src={img} alt="something" />
                </div>
                <div className={style.detail}>
                  <h2>{name}</h2>
                  <h4>
                    <span style={{ color: 'palevioletred' }}>Rating: </span>
                    {rating}
                  </h4>
                  <div className={style.story}>
                    <h4>Storyline</h4>
                    <p>{des}</p>
                    <div className={style.cast}>
                      <h5>The Cast</h5>
                      {
                        actors.map((ele, index) => (
                          <p className={style.para} key={String(index)}>>{ele.name}</p>
                        ))
                      }
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <h4>Data Published: <span>{datePublished}</span></h4>
                  </div>
                </div>
              </div>
            )
        }
      </React.Fragment>
    )
  }
}

DetailPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DetailPage;
