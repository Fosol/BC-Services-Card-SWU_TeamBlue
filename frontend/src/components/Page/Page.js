import React from 'react';
import PropTypes from 'prop-types';
import './Page.scss';

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired,
  };

  render() {
    const { title, html } = this.props;
    return (
      <div className="page">
        <div className="root">
          <div className="container">
            <h1>{title}</h1>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
