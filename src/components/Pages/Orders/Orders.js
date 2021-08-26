import React from 'react';    
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CartCard from '../../ProductCards/CartCard/CartCard';

class Orders extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        orders: []
      };
    }
  
    componentDidMount() {
        let orders = localStorage.getItem("orders");
        if (orders === null || orders === undefined) {
            orders = [];
        }
        else {
            orders = JSON.parse(orders);
            this.setState({
                orders: orders
            })
        }
    }
  
    componentWillUnmount() {
      
    }

    onSubmit = (event) => {
        console.log("On Submit");
    };
  
    render() {

        let orders = this.state.orders;
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{marginTop: "100px", marginBottom: "100px", height: "500px"}}>

                        {products.map((product, index) => (
                            <CartCard product={product} key={index} />
                        ))}
                    </div>
                </div>    
            </div>
        );
    }
  }
  
  export default Orders;