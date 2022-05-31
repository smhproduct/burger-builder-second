import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable,
    }
}

class Checkout extends Component {
    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash On Delivery"
        }
    }

    inputChangeHandler = e => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }
    submitHandler = () => {
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date()
        }

        axios.post("https://burger-builder-second-60f14-default-rtdb.firebaseio.com/orders.json", order)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>


                <h4 style={
                    {
                        border: '1px solid grey',
                        boxShadow: '1px 1px #888888',
                        borderRadius: '5px',
                        padding: '20px',
                    }
                }>Payment: BDT {this.props.totalPrice}</h4>
                <form style={
                    {
                        border: '1px solid grey',
                        boxShadow: '1px 1px #888888',
                        borderRadius: '5px',
                        padding: '20px',
                    }
                }>
                    <textarea name='deliveryAddress' value={this.state.values.deliveryAddress} className="form-control" placeholder='Your address' onChange={(e) => this.inputChangeHandler(e)}></textarea><br />
                    <input name="phone" className='form-control' value={this.state.values.phone} placeholder='Your Phone' onChange={(e) => this.inputChangeHandler(e)} /><br />
                    <select name='paymentType' className='form-control' value={this.state.values.paymentType} onChange={(e) => this.inputChangeHandler(e)}>
                        <option value="Cash On Delivery">Cash On Delivery</option>
                        <option value="Bkash">Bkash</option>
                    </select>
                    <br />
                    <Button style={{ backgroundColor: '#d70f64' }} className="mr-auto" onClick={this.submitHandler}>Place Order</Button>
                    <Link to={'/'}>
                        <Button color='secondary' className='mx-1'>Cancel</Button>
                    </Link>

                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Checkout);