import React, {Component} from 'react'

class FormComponent extends Component{

    onSubmitFunction = (e)=>{
        e.preventDefault();
        console.log("Date with the Z in it");
        console.log(document.getElementById("purchDate"));
        fetch('/garage_sell/', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                buyerName: document.getElementById("buyerName").value,
                price: document.getElementById("price").value,
                item_name: document.getElementById("itemDescription").value,
                datePurchased: document.getElementById("purchDate").value.substring(0,16)
            })
        })
            // We need the returned data to be converted to json
            .then(data=>data.json())
            //
            .then(data => {
                console.log(data);
            })
            .then(()=>{
                this.props.getInformation();
                document.getElementById("buyerName").value = "";
                document.getElementById("price").value = "";
                document.getElementById("itemDescription").value = "";
                document.getElementById("purchDate").value = "";
            });
    };

    render() {
        return(<div>
            <form onSubmit={this.onSubmitFunction}>
                <label htmlFor="buyerName">Enter Buyer's Name</label>
                <input type="text" id="buyerName" /><br/>

                <label htmlFor="itemDescription">Enter Item Description</label>
                <input type="text" id="itemDescription" /><br/>

                <label htmlFor="price">Enter Price</label>
                <input type="number" id="price" /><br/>

                <label htmlFor="purchDate">Date of Purchase</label>
                <input type="datetime-local" id="purchDate" /><br/>
                <button>Submit</button>
            </form>
        </div>)
    }
}

export default FormComponent;