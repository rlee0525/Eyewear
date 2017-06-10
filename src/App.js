import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import data from './eyewear.json';
import Navbar from './navbar.jsx';
import DesignDetailView from './design_detail_view.jsx';
import DesignListView from './design_list_view.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eyewear: null
    };

    this.clickDetail = this.clickDetail.bind(this);
    this.closeDetail = this.closeDetail.bind(this);
  }

  componentDidMount() {
    $('.list-title').removeClass("reduce-title");
  }

  clickDetail(eyewear) {
    window.scrollTo(0, 0);

    $('.list-detail').removeClass("selected-border");
    $('.list-title').addClass("reduce-title");
    $(`#detail-${eyewear.id}`).addClass("selected-border");

    this.setState({ eyewear });
  }

  closeDetail() {
    $('.list-detail').removeClass("selected-border");
    $('.list-title').removeClass("reduce-title");
    this.setState({ eyewear: null });
  }

  render() {
    return (
      <div className="App">
        <Navbar closeDetail={this.closeDetail} />
        
        {this.state.eyewear && <DesignDetailView eyewear={this.state.eyewear} />}
        
        <DesignListView 
          eyewears={data.eyewear}
          clickDetail={this.clickDetail}
        />
      </div>
    );
  }
}

export default App;
