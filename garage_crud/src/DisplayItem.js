import React, {Component} from 'react'

class DisplayItem extends Component{

    deleteItem = () =>{
        // You need to include the purchase id in the url in order to delete it.
        // each purchased is passed in. garage_sell URL plus the info you passed in.
        // The tell it which method it is... delete.
        //
        fetch('/garage_sell/' + this.props.eachPurchase.id,
            {
                method:'delete'
            })
            .then(data=>data.text())
            .then(data=>console.log(data))
            .then(data=>this.props.getInformation());
    };

    render() {
        return(
            <div>
                <h3>{this.props.eachPurchase.buyerName}</h3>
                <h3>{this.props.eachPurchase.price}</h3>
                <h3>{this.props.eachPurchase.item_name}</h3>
                <p>{this.props.eachPurchase.datePurchased}</p>
                <button onClick={this.deleteItem}>Delete</button>
                <hr/>
            </div>
        )
    }
}

export default DisplayItem;