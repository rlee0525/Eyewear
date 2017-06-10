import React from 'react';

class DesignListView extends React.Component {
  renderList() {
    return this.props.eyewears.map(eyewear => (
      <div 
        key={eyewear.id}
        id={`detail-${eyewear.id}`}
        className="list-detail" 
        onClick={() => this.props.clickDetail(eyewear)}
      >
        <img 
          className="list-img" 
          src={eyewear.images["frontal-sm"]} 
          alt=""
        />
        <p className="list-brand">{eyewear.brand}</p>
        <p className="list-name">{eyewear.name}</p>
      </div>
    ));
  }

  render() {
    return (
      <div className="list-view-container">
        <div className="list-title">Select Your Eyewear</div>

        <div className="list-container">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default DesignListView;