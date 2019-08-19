import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import GithubUser from './components/GithubUser/GithubUserContainer';
import RepositoryDetails from './components/RepositoryDetails/RepositoryDetailsContainer';


function App() {
  return (
    <div className="App">
    	<Switch>
    		<Route exact path="/" component={GithubUser} />
    		<Route exact path="/:userName/:repositoryId" component={RepositoryDetails} />
    	</Switch>
    </div>
  );
}

export default App;