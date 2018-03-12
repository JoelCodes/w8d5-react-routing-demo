import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const unicornDB = [{ id: 1, name: 'Periwinkle', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Oftheunicorn.jpg/240px-Oftheunicorn.jpg' }, { id: 2, name: 'Fredrink', imgUrl: 'https://media1.tenor.com/images/dcdccbd0d6aa06fa0dfc91b15c9c0917/tenor.gif?itemid=10576767' }];

function UnicornHeader() {
  const unicornLinks = unicornDB.map(unicorn => <Link key={unicorn.id} to={`/${unicorn.id}`}>{unicorn.name}</Link>);
  return (<header className="App-header">
    <h1 className="App-title">Unicorns!</h1>
    <Link to="/">Home</Link>
    {unicornLinks}
  </header>);
}

function UnicornIndex() {
  return <div><h2>Choose one of our fine Unicorns</h2></div>;
}

class UnicornPage extends Component {
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      alert('New Unicorn');
    }
  }
  render() {
    const { history, location, match } = this.props;
    const unicorn = unicornDB.find(u => u.id.toString() === match.params.id);
    return (<div>
      <h2>{unicorn.name}</h2>
      <img src={unicorn.imgUrl} alt={unicorn.name} />
    </div>);
  }
}
function App() {
  return (
    <div className="App">
      <UnicornHeader />
      <Switch>
        <Route path="/" exact component={UnicornIndex} />
        <Route path="/:id" component={UnicornPage} />
      </Switch>
    </div>
  );
}


export default App;
