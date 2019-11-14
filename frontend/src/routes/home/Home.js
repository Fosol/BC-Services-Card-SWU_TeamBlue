import React from 'react';
import './Home.scss';
import Link from '../../components/Link';

function Home() {

  return (
    <div className="home">
      <div className="root">
        <div>
          <div className="container">
            <Link className="button" to="/login">
              Log in
            </Link>
          </div>
          <div className="container">
            <span className="spacer">or</span>
          </div>
          <div className="container">
            <Link className="button" to="/register">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (Home);
