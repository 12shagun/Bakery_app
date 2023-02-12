import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './Pages/PageRoutes';
import store from './reducer/store';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Provider store={store}>
        <PageRoutes/>
        </Provider>
      </BrowserRouter>
    )
  }
}
export default App;
