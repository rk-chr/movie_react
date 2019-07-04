/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';

class Layout extends React.Component {
  state = {
    recent: null
  }

  componentDidMount() {
    if (localStorage.getItem('cards')) {
      const arr = JSON.parse(localStorage.getItem('cards'));
      this.setState({
        recent: arr
      });
    }
  }

  render() {
    const { children } = this.props;
    const { recent } = this.state;
    return (
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {
          recent
            ? (
              <React.Fragment>
                <h3>Recent Searches:</h3>
                <div className="grid">
                  {recent.map((ele, index) => (
                    <div className="recent" key={String(index)}>
                      <Link to={ele.url}>
                        <img src={ele.img} alt="movie title" />
                        <div className="title">
                          <h3>{ele.name}</h3>
                        </div>
                      </Link>
                    </div>
                  ))}
                  {' '}

                </div>
              </React.Fragment>
            )
            : null
        }
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
