import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
    console.log(response);
  }

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <GoogleLogin
      clientId="786175337282-2o429fqsco57e1ciro8gaodpv3f0l0pl.apps.googleusercontent.com"
      render={renderProps => (
        <button onClick={renderProps.onClick}>This is my custom Google button</button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />,
    document.getElementById('googleButton')
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
