import React from 'react';
import Routes from './routes/index'
import './styles/globals.css'

type Props = {}

class App extends React.Component<Props> {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
