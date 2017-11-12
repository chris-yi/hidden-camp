import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import swal from 'sweetalert'
import "./UpdateListing.css"

const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 16,
    },
  };

  const buttonStyle = {
    margin: 12,
  };

class UpdateListing extends Component {
  constructor() {
    super();

    this.state = {
      listing: null,
      fire: false,
      water: false,
      pets: false,
      toilets: false,
      trash: false,
      showers: false,
      wifi: false
    };
    this.getListing = this.getListing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateListing = this.updateListing.bind(this);
  }

  componentWillMount = () => {
    this.getListing();
  };

  getListing() {
    const listing = this.props.hostListings.filter(e => {
      console.log(e.listing_id, this.props.match.params.id);
      return e.listing_id === +this.props.match.params.id;
    });
    this.setState({
      listing: listing
    });
  }

  handleChange() {
      console.log(this.refs.listingName.value)
      this.setState({
        listing_name: this.refs.listingName.getValue()
      })
      console.log(this.state)
  }

  updateCheckFire() {
    this.setState((oldState) => {
      return {
        fire: !oldState.checked,
      };
    });
    console.log(this.state)
  }

  updateCheckWater() {
    this.setState((oldState) => {
      return {
        water: !oldState.checked,
      };
    });
    console.log(this.state)
  }

  updateCheckPets() {
    this.setState((oldState) => {
      return {
        pets: !oldState.checked,
      };
    });
    console.log(this.state)
  }
  
  updateCheckToilets() {
    this.setState((oldState) => {
      return {
        toilets: !oldState.checked,
      };
    });
    console.log(this.state)
  }

  updateCheckTrash() {
    this.setState((oldState) => {
      return {
        trash: !oldState.checked,
      };
    });
    console.log(this.state)
  }

  updateCheckShowers() {
    this.setState((oldState) => {
      return {
        showers: !oldState.checked,
      };
    });
    console.log(this.state)
  }

  updateCheckWifi() {
    this.setState((oldState) => {
      return {
        wifi: !oldState.checked,
      };
    });
    console.log(this.state)
  }

  updateListing() {
    swal({
        title: "Please confirm your listing update!",
        buttons: true,
        dangerMode: false
    })
    .then((confirm) => {
        if(confirm) {
            swal({
                title: "Your listing has been updated!",
                icon: "success"
            });
            axios.put(`/api/listing/${this.props.match.params.id}`, {
                listing_id: this.props.match.params.id,
                listing_name: this.refs.listingName.getValue(),
                img_1: this.refs.img1.getValue(),
                img_2: this.refs.img2.getValue(),
                img_3: this.refs.img3.getValue(),
                img_4: this.refs.img4.getValue(),
                img_5: this.refs.img5.getValue(),
                fires: this.state.fire,
                potable_water: this.state.water,
                pets: this.state.pets,
                toilets: this.state.toilets,
                trash: this.state.trash,
                showers: this.state.showers,
                wifi: this.state.wifi,
                max_campers: this.refs.maxCampers.getValue(),
                price_per_night: this.refs.pricePerNight.getValue(),
                min_night_stay: this.refs.minNightStay.getValue(),
                check_in_time: this.refs.checkInTime.getValue(),
                check_out_time: this.refs.checkOutTime.getValue(),
                description: this.refs.description.getValue()
                }).then(() => {
                    console.log("Listing Updated")
                    this.props.history.push('/MyProfile');
            })
        } else {
            swal({
                title: "Ok, please re-submit when you're ready!",
                icon: "warning"
              });
        }
    })
   
}

  render() {
    // console.log(this.props);
    // console.log(this.props.match.params.id);

    const updateListing = this.state.listing[0];
    // console.log(updateListing);
    return (
      <div>
         <Navbar />
        <div>


        <div className="Update_Details_Container">
          <div className="Text_Input">
          <div>
            {/* <input ref="listingName" type="text" defaultValue={updateListing.listing_name} onChange={this.handleChange} placeholder="hello"/> */}
            {/* You dont need a handlechange function if yu are using material UI, just use built in function .getValue to store the value.*/}
            <TextField
            ref="listingName"
            defaultValue={updateListing.listing_name}
            floatingLabelText="Listing Name"
            /><br />
          </div>
          
          <div>
          <TextField
            ref="address"
            disabled={true}
            defaultValue={updateListing.address}
            floatingLabelText="Address"
            /><br />
          </div>

          <div>
          <TextField
            ref="city"
            disabled={true}
            defaultValue={updateListing.city}
            floatingLabelText="City"
            /><br />
          </div>

          <div>
          <TextField
            ref="state"
            disabled={true}
            defaultValue={updateListing.state}
            floatingLabelText="State"
            /><br />
          </div>
          
          <div>
          <TextField
            ref="zip"
            disabled={true}
            defaultValue={updateListing.zip}
            floatingLabelText="Zip"
            /><br />
          </div>

          <div>
          <TextField
            ref="pricePerNight"
            defaultValue={updateListing.price_per_night}
            floatingLabelText="Price Per Night"
            /><br />
          </div>

          <div>
          <TextField
            ref="maxCampers"
            defaultValue={updateListing.max_campers}
            floatingLabelText="Maximum Campers"
            /><br />
          </div>

          <div>
          <TextField
            ref="minNightStay"
            defaultValue={updateListing.min_night_stay}
            floatingLabelText="Minimum Night Stays"
            /><br />
          </div>

          <div>
          <TextField
            ref="checkInTime"
            defaultValue={updateListing.check_in_time}
            floatingLabelText="Check-In Time"
            /><br />
          </div>

          <div>
          <TextField
            ref="checkOutTime"
            defaultValue={updateListing.check_out_time}
            floatingLabelText="Check-Out Time"
            /><br />
          </div>


          <div>
          <TextField
            ref="img1"
            defaultValue={updateListing.img_1}
            floatingLabelText="Image 1 URL"
            /><br />
          </div>
          <div>
          <TextField
            ref="img2"
            defaultValue={updateListing.img_2}
            floatingLabelText="Image 2 URL"
            /><br />
          </div>
          <div>
          <TextField
            ref="img3"
            defaultValue={updateListing.img_3}
            floatingLabelText="Image 3 URL"
            /><br />
          </div>
          <div>
          <TextField
            ref="img4"
            defaultValue={updateListing.img_4}
            floatingLabelText="Image 4 URL"
            /><br />
          </div>
          <div>
          <TextField
            ref="img5"
            defaultValue={updateListing.img_5}
            floatingLabelText="Image 5 URL"
            /><br />
          </div>

          </div>

        <div className="True_False">
          <h4>Amenities Available (Check all that applies)</h4>
          <div>          
            <Checkbox
                label="Fires Allowed"
                checked={this.state.fire}
                onCheck={this.updateCheckFire.bind(this)}
                style={styles.checkbox}
             /></div>

            <div>
             <Checkbox
                label="Potable Water"
                checked={this.state.water}
                onCheck={this.updateCheckWater.bind(this)}
                style={styles.checkbox}
             /></div>
             
             <div>
             <Checkbox
                label="Pets Allowed"
                checked={this.state.pets}
                onCheck={this.updateCheckPets.bind(this)}
                style={styles.checkbox}
             /></div>

             <div>
             <Checkbox
                label="Toilets Available"
                checked={this.state.toilets}
                onCheck={this.updateCheckToilets.bind(this)}
                style={styles.checkbox}
             /></div>

             <div>
             <Checkbox
                label="Trash"
                checked={this.state.trash}
                onCheck={this.updateCheckTrash.bind(this)}
                style={styles.checkbox}
             /></div>

             <div>
             <Checkbox
                label="Showers"
                checked={this.state.showers}
                onCheck={this.updateCheckShowers.bind(this)}
                style={styles.checkbox}
             /></div>

             <div>
             <Checkbox
                label="Wifi"
                checked={this.state.wifi}
                onCheck={this.updateCheckWifi.bind(this)}
                style={styles.checkbox}
             /></div>

        <div className="Listing_Description">
            <h4>Listing Description</h4>
          <TextField
            ref="description"
            defaultValue={updateListing.description}
            floatingLabelText="Description"
            /><br />
          </div>

          <div>
          <RaisedButton label="Submit" style={buttonStyle} onClick={this.updateListing}/>
          </div>

        </div>

        </div>
      </div>
      <Footer />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    hostListings: state.hostListings,
    user: state.user
  };
}

export default connect(mapStateToProps, {})(UpdateListing);
