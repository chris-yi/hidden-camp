import React, { Component } from "react";
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      dateTime: null
    }

  }


  setDate = (dateTime) => this.setState({ dateTime })

  render() {
    console.log(this.state.dateTime)
    return (
      <MuiThemeProvider>
      <div>
        <h1>Checkout</h1>
        
        <DateTimePicker 
        onChange={this.setDate}
        DatePicker={DatePickerDialog}
        TimePicker={TimePickerDialog}
        floatingLabelFixed	
  floatingLabelText="Get my date"
  floatingLabelFocusStyle={{ marginTop: '10px' }}
  disabled={false}
  errorText='Required'
  id="some-id"
  fullWidth={false}
  clearIcon={null}
      />

      </div>
      </MuiThemeProvider>
    );
  }
}

export default Checkout;
