import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage.component.jsx'
import ShopPage from './components/pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  } 

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
            console.log('snapshot', this.state)
        });
      } 

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signInSignUp' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
