import './App.css';
import News from './News';
import Nevbar from './components/Nevbar';
import React, { Component } from 'react'
import { Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';



export default class 
 App extends Component {
  apikey ="befc9b17a8a64e7faf2af68f03b2fb76"
  state= {
    progress : 0,
  }
  setProgress =(progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Nevbar/>
        <LoadingBar color='red' progress={this.state.progress}/>
        <Routes>
        <Route path="/" element={<News setProgress ={this.setProgress} key="general" apikey ={this.apikey} category="general" />}></Route>
        <Route path="/businees" element={<News setProgress ={this.setProgress} key="businees" apikey ={this.apikey} category="businees" />}></Route>
        <Route path="/entertainment" element={<News setProgress ={this.setProgress} key="entertainment" apikey ={this.apikey} category="entertainment" />}></Route>
        <Route path="/health" element={<News setProgress ={this.setProgress} key="health" apikey ={this.apikey} category="health" />}></Route>
        <Route path="/science" element={<News setProgress ={this.setProgress} key="science" apikey ={this.apikey} category="science" />}></Route>
        <Route path="/sports" element={<News setProgress ={this.setProgress} key="sports" apikey ={this.apikey} category="sports" />}></Route>
        <Route path="/technology" element={<News setProgress ={this.setProgress} key="technology" apikey ={this.apikey} category="technology" />}></Route>
        </Routes>
       </div>
    )
  }
}


// export default App;
