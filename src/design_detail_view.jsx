import React from 'react';
import $ from 'jquery';

class DesignDetailView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "52-15-140"
    };

    this.buyEyewear = this.buyEyewear.bind(this);
    this.selectSize = this.selectSize.bind(this);
  }

  buyEyewear() {
    let eyewear = this.props.eyewear;
    let size = this.state.size;
    let purchaseDate = new Date();

    let data = {
      'purchase-sku-id': eyewear["sku-id"],
      'purchase-price': eyewear["price"],
      'purchase-sku-size': size,
      'purchase-datatime': purchaseDate.toISOString()
    };

    $.ajax({
      method: 'POST',
      url: `/buy`,
      data
    });
  }

  selectSize(size) {
    this.setState({ size });
  }

  render() {
    let eyewear = this.props.eyewear;

    return (
      <div className="detail-view-container">
        <div className="detail-images-container">
          <div className="detail-image-container">
            <img 
              className="detail-img" 
              src={eyewear.images["frontal"]} 
              alt=""
            />
          </div>

          <div className="detail-image-container">
            <img 
              className="detail-img" 
              src={eyewear.images["side"]} 
              alt=""
            />
          </div>
        </div>

        <p className="detail-brand">{eyewear.brand}</p>
        <p className="detail-name">{eyewear.name}</p>
        <p className="detail-price">${Math.ceil(eyewear.price)}</p>

        <div className="detail-body-container">
          <div 
            className="detail-description"
            dangerouslySetInnerHTML={ {__html: eyewear.description} }
          />

          <div className="detail-size-container">
            <div className="detail-size-title">
              Select Size
            </div>

            <div className="radio-container"> 
              <ul className="detail-size-radio">
                <li onClick={() => this.selectSize("52-15-140")}> 
                  <input type="radio" id="f-option" name="selector" />
                  <label htmlFor="f-option">52-15-140</label>

                  <div className="check"></div>
                </li>

                <li onClick={() => this.selectSize("55-15-140")}>
                  <input type="radio" id="s-option" name="selector" />
                  <label htmlFor="s-option">55-15-140</label>

                  <div className="check">
                    <div className="inside"></div>
                  </div>
                </li>

                <li onClick={() => this.selectSize("58-15-140")}>
                  <input type="radio" id="t-option" name="selector" />
                  <label htmlFor="t-option">58-15-140</label>

                  <div className="check">
                    <div className="inside"></div>
                  </div>
                </li>
              </ul>
            </div>

            <button 
              className="buy-button"
              onClick={() => this.buyEyewear()}
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default DesignDetailView;