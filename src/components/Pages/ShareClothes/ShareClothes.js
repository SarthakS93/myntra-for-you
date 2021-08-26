import React from 'react';    
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const returnTypeList = [
    {
        label: "Buyback",
        value: "Buyback"
    },
    {
        label: "Share",
        value: "Share"
    },
    {
        label: "Donate",
        value: "Donate"
    },
];

class ShareClothes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        returnType: null
      };
    }
  
    componentDidMount() {
      this.setState({});
    }
  
    componentWillUnmount() {
      
    }

    handleChange = (event) => {
        this.setState({
            returnType:event.target.value
        });
    };
  
    render() {
      return (
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{marginTop: "100px", marginBottom: "100px", height: "500px"}}>
                    <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Category" /></div>
                    <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Brand" /></div>
                    <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Description" /></div>
                    <div style={{marginTop: "15px"}}>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={this.state.returnType}
                            onChange={this.handleChange}
                            helperText="Please select your return type"
                            >
                            {returnTypeList.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>    
                    <div style={{marginTop: "15px"}}>
                        <Button variant="contained" style={{backgroundColor: "#9ce7d1", padding: "15px", border: "none", width: "100%"}}>Submit</Button>
                    </div>    
                </div>
            </div>    
        </div>
      );
    }
  }
  
  export default ShareClothes;