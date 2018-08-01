import React, { Component } from 'react';
import Awal from './component/awal';
import axios from 'axios';

class App extends Component {
  state = {
    isiDataA: "Ini Data A",
    isiDataB: "Ini Data B",
    data: [],
    loading: false,
    isSelected: false
  }

  ubahWarna = () => {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    document.body.style.transition = '0.35s';


    // for(let i = 0; i < this.state.warnaBg; i++){
    //   this.state.warna = this.state.warnaBg[i];
    // }
    
  }

  // componentDidMount(){
  //   axios.get(this.ubahWarna).then(theColor => {
  //     this.setState({
  //       warna: theColor.warnaBg,
  //       loading: true
  //     })
  //   })
  // }

  // componentDidMount(){
  //   axios.get("https://jsonplaceholder.typicode.com/comments").then(fake => {
  //     this.setState({
  //       data: fake.data,
  //       loading: true
  //     })
  //   })
  // }

  render(){
    return(
      <div>
        <p style={{ backgroundColor: this.state.warnaBg, height: 100 }}>
          Pencet aja => <button onClick={ this.ubahWarna }>Ubah Warna</button>
        </p>
        {/* <h5>{ this.state.loading ? this.state.data.map( satuan => { return <h5>{satuan.email}</h5> } ) : ( <h1>Loading . . .</h1> ) }</h5> */}
      </div>
    )
  }
}

export default App;