import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ResultsCard.css";
import { updateListingID } from "../../ducks/reducer";

class ResultsCard extends Component {
    constructor(props) {
        super(props)
        
        this.showDetails = this.showDetails.bind(this)
    }

    showDetails(){
        console.log(this.props.listingID)
        this.props.updateListingID(this.props.listingID)
    }

    //Ammenities icons

    fires() {
      if (this.props.fire) {
        return (
          <div className="icons">
            <i className="fa fa-fire" aria-hidden="true" />
          </div>
        );
      } else if (!this.props.fire) {
        return (
          null
        );
      }
    }
  
    water() {
      if (this.props.water) {
        return (
          <div className="icons">
            <i className="fa fa-tint" aria-hidden="true" />
          </div>
        );
      } else if (!this.props.water) {
        return (
          null
        );
      }
    }
  
    pets() {
      if (this.props.pets) {
        return (
          <div className="icons">
            <i className="fa fa-paw" aria-hidden="true" />
          </div>
        );
      } else if (!this.props.pets) {
        return (
          null
        );
      }
    }
  
    toilet() {
      if (this.props.toilets) {
        return (
          <div className="icons">
            <i className="fa fa-male" aria-hidden="true">
              <i className="fa fa-female" aria-hidden="true" />
            </i>
          </div>
        );
      } else if (this.props.toilets) {
        return (
          null
        );
      }
    }
  
    trash() {
      if (this.props.trash) {
        return (
          <div className="icons">
            <i className="fa fa-trash" aria-hidden="true" />
          </div>
        );
      } else if (!this.props.trash) {
        return (
          null
        );
      }
    }
  
    showers() {
      if (this.props.showers) {
        return (
          <div className="icons">
            <i className="fa fa-bath" aria-hidden="true" />
          </div>
        );
      } else if (!this.props.showers) {
        return (
          null
        );
      }
    }
  
    wifi() {
      if (this.props.wifi) {
        return (
          <div className="icons">
            <i className="fa fa-wifi" aria-hidden="true" />
          </div>
        );
      } else if (!this.props.wifi) {
        return (
          null
        );
      }
    }


  render() {
    return (
      <Link to="/Details" style={{ textDecoration: 'none' }}>
        <div className="resultsCard" onClick={this.showDetails}>
            <img src={this.props.cardImg} alt="card_img" className="card_img" />

          <ul className="card_info">
            <p className="site_name">{this.props.listingName}</p>
            <p className="city_state">
              in {this.props.city.charAt(0).toUpperCase() + this.props.city.slice(1)} | {this.props.state}
            </p>
            <li>${this.props.pricePerNight.toString()}/night</li>
            <li>Max Campers:{this.props.maxCampers}</li>
            <li>Category: {this.props.category ? this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) : null}</li>
            <div className="icon_container">
            {this.fires()} {this.water()} {this.pets()} {this.toilet()} {this.trash()} {this.showers()} {this.wifi()}

            {/* <div className="icons">{this.fires()}</div>
            <div className="icons">{this.water()}</div>
            <div className="icons">{this.pets()}</div>
            <div className="icons">{this.toilet()}</div>
            <div className="icons">{this.trash()}</div>
            <div className="icons">{this.showers()}</div>
            <div className="icons">{this.wifi()}</div> */}
            </div>
          </ul>
            
        </div>
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeListingID: state.listingID
  };
}

export default connect(mapStateToProps, { updateListingID })(ResultsCard);
