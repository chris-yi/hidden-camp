import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import swal from "sweetalert";
import "./AddListing.css";

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

const buttonStyle = {
  margin: 12
};

class AddListing extends Component {
  constructor() {
    super();

    this.state = {
      fire: false,
      water: false,
      pets: false,
      toilets: false,
      trash: false,
      showers: false,
      wifi: false,
      // US.State Value
      value: ""
    };
    // this.getListing = this.getListing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.updateListing = this.updateListing.bind(this);
    this.createListing = this.createListing.bind(this);
    this.handleUsState = this.handleUsState.bind(this);
  }

  handleChange() {
    console.log(this.refs.listingName.value);
    this.setState({
      listing_name: this.refs.listingName.getValue()
    });
    console.log(this.state);
  }

  updateCheckFire() {
    this.setState(oldState => {
      return {
        fire: !oldState.checked
      };
    });
    console.log(this.state);
  }

  updateCheckWater() {
    this.setState(oldState => {
      return {
        water: !oldState.checked
      };
    });
    console.log(this.state);
  }

  updateCheckPets() {
    this.setState(oldState => {
      return {
        pets: !oldState.checked
      };
    });
    console.log(this.state);
  }

  updateCheckToilets() {
    this.setState(oldState => {
      return {
        toilets: !oldState.checked
      };
    });
    console.log(this.state);
  }

  updateCheckTrash() {
    this.setState(oldState => {
      return {
        trash: !oldState.checked
      };
    });
    console.log(this.state);
  }

  updateCheckShowers() {
    this.setState(oldState => {
      return {
        showers: !oldState.checked
      };
    });
    console.log(this.state);
  }

  updateCheckWifi() {
    this.setState(oldState => {
      return {
        wifi: !oldState.checked
      };
    });
    console.log(this.state);
  }

  createListing() {
    swal({
      title: "Please confirm your new listing!",
      buttons: true,
      dangerMode: false
    }).then(confirm => {
      if (confirm) {
        swal({
          title: "Your new listing has been created!",
          icon: "success"
        });
        axios
          .post(`/api/listing/`, {
            host_id: this.props.user.user_id,
            listing_name: this.refs.listingName.getValue(),
            address: this.refs.address.getValue(),
            city: this.refs.city
              .getValue()
              .replace(/\s+/g, "-")
              .toLowerCase(),
            state: this.state.value,
            zip: this.refs.zip.getValue(),
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
          })
          .then(() => {
            console.log("Listing Created", this.props.user.user_id);
            this.props.history.push("/MyProfile");
          });
      } else {
        swal({
          title: "Ok, please re-submit when you're ready!",
          icon: "warning"
        });
      }
    });
  }

  handleUsState = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <Navbar />
        <div>
          <div className="Update_Details_Container">
            <div className="Text_Input">
              <div>
                {/* <input ref="listingName" type="text" defaultValue={updateListing.listing_name} onChange={this.handleChange} placeholder="hello"/> */}
                {/* You dont need a handlechange function if yu are using material UI, just use built in function .getValue to store the value.*/}
                <TextField ref="listingName" floatingLabelText="Listing Name" />
                <br />
              </div>

              <div>
                <TextField ref="address" floatingLabelText="Address" />
                <br />
              </div>

              <div>
                <TextField ref="city" floatingLabelText="City" />
                <br />
              </div>

              <div>
                {/* <TextField
            ref="state"
            floatingLabelText="State"
            /><br /> */}
                <SelectField
                  floatingLabelText="State"
                  value={this.state.value}
                  onChange={this.handleUsState}
                >
                  <MenuItem value={"AL"} primaryText="AL" />
                  <MenuItem value={"AK"} primaryText="AK" />
                  <MenuItem value={"AZ"} primaryText="AZ" />
                  <MenuItem value={"AR"} primaryText="AR" />
                  <MenuItem value={"CA"} primaryText="CA" />
                  <MenuItem value={"CO"} primaryText="CO" />
                  <MenuItem value={"CT"} primaryText="CT" />
                  <MenuItem value={"DE"} primaryText="DE" />
                  <MenuItem value={"FL"} primaryText="FL" />
                  <MenuItem value={"GA"} primaryText="GA" />
                  <MenuItem value={"HI"} primaryText="HI" />
                  <MenuItem value={"ID"} primaryText="ID" />
                  <MenuItem value={"IL"} primaryText="IL" />
                  <MenuItem value={"IN"} primaryText="IN" />
                  <MenuItem value={"IA"} primaryText="IA" />
                  <MenuItem value={"KS"} primaryText="KS" />
                  <MenuItem value={"KY"} primaryText="KY" />
                  <MenuItem value={"LA"} primaryText="LA" />
                  <MenuItem value={"ME"} primaryText="ME" />
                  <MenuItem value={"MD"} primaryText="MD" />
                  <MenuItem value={"MA"} primaryText="MA" />
                  <MenuItem value={"MI"} primaryText="MI" />
                  <MenuItem value={"MN"} primaryText="MN" />
                  <MenuItem value={"MS"} primaryText="MS" />
                  <MenuItem value={"MO"} primaryText="MO" />
                  <MenuItem value={"MT"} primaryText="MT" />
                  <MenuItem value={"NE"} primaryText="NE" />
                  <MenuItem value={"NV"} primaryText="NV" />
                  <MenuItem value={"NH"} primaryText="NH" />
                  <MenuItem value={"NJ"} primaryText="NJ" />
                  <MenuItem value={"NM"} primaryText="NM" />
                  <MenuItem value={"NY"} primaryText="NY" />
                  <MenuItem value={"NC"} primaryText="NC" />
                  <MenuItem value={"ND"} primaryText="ND" />
                  <MenuItem value={"OH"} primaryText="OH" />
                  <MenuItem value={"OK"} primaryText="OK" />
                  <MenuItem value={"OR"} primaryText="OR" />
                  <MenuItem value={"PA"} primaryText="PA" />
                  <MenuItem value={"RI"} primaryText="RI" />
                  <MenuItem value={"SC"} primaryText="SC" />
                  <MenuItem value={"SD"} primaryText="SD" />
                  <MenuItem value={"TN"} primaryText="TN" />
                  <MenuItem value={"TX"} primaryText="TX" />
                  <MenuItem value={"UT"} primaryText="UT" />
                  <MenuItem value={"VT"} primaryText="VT" />
                  <MenuItem value={"VA"} primaryText="VA" />
                  <MenuItem value={"WA"} primaryText="WA" />
                  <MenuItem value={"WV"} primaryText="WV" />
                  <MenuItem value={"WI"} primaryText="WI" />
                  <MenuItem value={"WY"} primaryText="WY" />
                </SelectField>
              </div>

              <div>
                <TextField ref="zip" floatingLabelText="Zip" />
                <br />
              </div>

              <div>
                <TextField
                  ref="pricePerNight"
                  floatingLabelText="Price Per Night"
                />
                <br />
              </div>

              <div>
                <TextField
                  ref="maxCampers"
                  floatingLabelText="Maximum Campers"
                />
                <br />
              </div>

              <div>
                <TextField
                  ref="minNightStay"
                  floatingLabelText="Minimum Night Stays"
                />
                <br />
              </div>

              <div>
                <TextField
                  ref="checkInTime"
                  floatingLabelText="Check-In Time"
                />
                <br />
              </div>

              <div>
                <TextField
                  ref="checkOutTime"
                  floatingLabelText="Check-Out Time"
                />
                <br />
              </div>

              <div>
                <TextField ref="img1" floatingLabelText="Image 1 URL" />
                <br />
              </div>
              <div>
                <TextField ref="img2" floatingLabelText="Image 2 URL" />
                <br />
              </div>
              <div>
                <TextField ref="img3" floatingLabelText="Image 3 URL" />
                <br />
              </div>
              <div>
                <TextField ref="img4" floatingLabelText="Image 4 URL" />
                <br />
              </div>
              <div>
                <TextField ref="img5" floatingLabelText="Image 5 URL" />
                <br />
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
                />
              </div>

              <div>
                <Checkbox
                  label="Potable Water"
                  checked={this.state.water}
                  onCheck={this.updateCheckWater.bind(this)}
                  style={styles.checkbox}
                />
              </div>

              <div>
                <Checkbox
                  label="Pets Allowed"
                  checked={this.state.pets}
                  onCheck={this.updateCheckPets.bind(this)}
                  style={styles.checkbox}
                />
              </div>

              <div>
                <Checkbox
                  label="Toilets Available"
                  checked={this.state.toilets}
                  onCheck={this.updateCheckToilets.bind(this)}
                  style={styles.checkbox}
                />
              </div>

              <div>
                <Checkbox
                  label="Trash"
                  checked={this.state.trash}
                  onCheck={this.updateCheckTrash.bind(this)}
                  style={styles.checkbox}
                />
              </div>

              <div>
                <Checkbox
                  label="Showers"
                  checked={this.state.showers}
                  onCheck={this.updateCheckShowers.bind(this)}
                  style={styles.checkbox}
                />
              </div>

              <div>
                <Checkbox
                  label="Wifi"
                  checked={this.state.wifi}
                  onCheck={this.updateCheckWifi.bind(this)}
                  style={styles.checkbox}
                />
              </div>

              <div className="Listing_Description">
                <h4>Listing Description</h4>
                <TextField ref="description" floatingLabelText="Description" />
                <br />
              </div>

              <div>
                <RaisedButton
                  label="Submit"
                  style={buttonStyle}
                  onClick={this.createListing}
                />
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

export default connect(mapStateToProps, {})(AddListing);
