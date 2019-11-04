import React, {Component} from 'react'
import DisplayItem from "./DisplayItem";
import FormComponent from "./FormComponent";

class GarageSale extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // We're putting all the data in an array
            displayedItems: <p>Loading</p>,
        }
    }

    componentDidMount() {
        this.getInformation();
    }

    // Read function
    getInformation = () =>{
        fetch('/garage_sell/')
            .then(returnedData => returnedData.json())
            .then(returnedDataResponse => {
                let tempData = returnedDataResponse.map(
                    (eachItem)=>{
                        return(<DisplayItem key={eachItem.id} eachPurchase={eachItem} getInformation={this.getInformation}/>);
                    }
                );
                this.setState({displayedItems: tempData})
            });
    };

    render() {
        return(
            <div>
                <h1>Garage Sale</h1>
                <FormComponent getInformation={this.getInformation}/>
                <h3>Buyers</h3>
                {/*this.state information automatically updates*/}
                {this.state.displayedItems}
            </div>
        )
    }
}

export default GarageSale;