  import React from 'react';
import './App.css';

function DataFormatada(props){
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
};

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date : new Date()
    };
  }

  componentDidMount(){
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000);
    console.log("Relógio #1:  " + this.timerID);


  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }


  thick(){
    this.setState({
      date: new Date()
    });
  }

  pause = () =>{
    clearInterval(this.timerID)
    console.log(`Relógio #2: ${this.timerID} foi pausado!`)
  }

  retomar = () =>{
    this.timerID = setInterval(() => {
      this.thick()
    }, 1000);

    console.log("Relógio retomado!")
    console.log(`Relógio ${this.timerID}`)
    
  }


  render(){

    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <button  style={{color : "white", height: '25px', fontWeight: '600', margin:"20px", backgroundColor: "#008000", border: "none"}} onClick={this.pause}>Pausar</button>
        <button style={{color : "white", height: '25px', fontWeight: '600', margin:"20px", backgroundColor: "#B22222",  border: "none"}} onClick={this.retomar}>Recomeçar</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Faz a chamada de dois relógios para mostrar a independência destes */}
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

export default App;