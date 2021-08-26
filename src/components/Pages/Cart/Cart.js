import React from 'react';    
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CartCard from '../../ProductCards/CartCard/CartCard';

class Cart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          products: []
      };
    }
  
    componentDidMount() {
        let products = localStorage.getItem("cartItems");
        if (products === null || products === undefined) {
            products = [];
        }
        else {
            products = JSON.parse(products);
            this.setState({
                products: products
            })
        }
    }
  
    componentWillUnmount() {
      
    }

    onDelete = (product, event) => {
        let cartItems = localStorage.getItem("cartItems");
        if (cartItems === null || cartItems === undefined) {
            cartItems = [];
        }
        else {
            cartItems = JSON.parse(cartItems);
            let productIndex = null;
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].id === product.id) {
                    productIndex = i;
                    break;
                }
            }

            if (productIndex !== null) {
                cartItems.splice(productIndex, 1);
            }
        }

        this.setState({
            products: cartItems
        });

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    onSubmit = (event) => {
        console.log("On Submit");
    };
  
    render() {

        let products = this.state.products;
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{marginTop: "100px", marginBottom: "100px", height: "500px"}}>

                        {products.map((product, index) => (
                            <CartCard product={product} key={index} onDelete={this.onDelete} />
                        ))}
                    </div>
                </div>    
            </div>
        );
    }
  }
  
  export default Cart;