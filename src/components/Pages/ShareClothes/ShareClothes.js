import React from 'react';    
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


/**
 * image upload tutorial - https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
 */

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
        returnType: null,
        selectedFile: null,
        category: "",
        brand: "",
        description: "",
      };
    }
  
    componentDidMount() {

    }
  
    componentWillUnmount() {
      
    }

    onReturnTypeChange = (event) => {
        this.setState({
            returnType:event.target.value,
        });
    };

    onImageUpload = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0],
        });
    }

    onSubmit = (event) => {
        console.log("On Submit");

        let product = {
            name: this.state.brand + this.state.category,
            category: this.state.category,
            brand: this.state.brand,
            price: this.state.returnType === "Buyback" ? this.state.price : 0,
            images: [this.state.selectedFile]
        };

        console.log(product);
        console.log(product.images[0].value);
        console.log(URL.createObjectURL(product.images[0]));
    };

    onTextFieldChangeHandler = (id, event) => {
        this.setState({[id]: event.target.value});
    }
  
    render() {
      return (
        <div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{marginTop: "100px", marginBottom: "100px", height: "500px"}}>
                    <input type="file" name="file" onChange={this.onImageUpload} accept="image/*" id="img-upload" />  
                    <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Category" style={{width: "100%"}} onChange={(e) => this.onTextFieldChangeHandler("category", e)} /></div>
                    <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Brand" style={{width: "100%"}} onChange={(e) => this.onTextFieldChangeHandler("brand", e)} /></div>
                    <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Description" style={{width: "100%"}} onChange={(e) => this.onTextFieldChangeHandler("description", e)} /></div>
                    <div style={{marginTop: "15px"}}>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={this.state.returnType}
                            onChange={this.onReturnTypeChange}
                            helperText="Please select your return type"
                            style={{width: "100%"}}
                            >
                            {returnTypeList.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div> 
                    {
                        this.state.returnType === "Buyback" ?
                        <div style={{marginTop: "15px"}}><TextField id="standard-required" defaultValue="" label="Price" style={{width: "100%"}} onChange={(e) => this.onTextFieldChangeHandler("price", e)} /></div>
                        :
                        null
                    }   
                    <div style={{marginTop: "15px"}}>
                        <Button variant="contained" style={{backgroundColor: "#eda3b5", padding: "15px", border: "none", width: "100%", color: "white"}} onClick={this.onSubmit}>Submit</Button>
                    </div>    
                </div>
            </div>    
        </div>
      );
    }
  }
  
  export default ShareClothes;