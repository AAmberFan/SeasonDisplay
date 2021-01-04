import React from 'react';
import ReactDom from 'react-dom';

// const App =()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     )
//     return <div>Hi there!</div>;
// };

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {lat:null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat:position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        )
    }
    render(){
        if(this.state.errorMessage&&!this.state.lat){
            return (<div>Error:{this.state.errorMessage}</div>);
        }
        else if(this.state.lat&&!this.state.errorMessage){
        return <div>Latitude:{this.state.latitude}</div>;
        }
        else{
            return <div>Loading!</div>
        }
        
    }
}
ReactDom.render(
    <App/>,
    document.querySelector("#root")
);
