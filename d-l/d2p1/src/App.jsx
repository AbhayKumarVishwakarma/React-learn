import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import MyButton from './Components/MyButton';


function App() {

  const buttonClicked = () => {
    alert('clicked');
  }

  const ButtonData = {
    buttonText: 'My Button 2',
    buttonColor: 'yellow',
    onClick: buttonClicked
  }

  return (
    <div className="App">

      <Greeting />

      <p> { 1+2 === 3 ? 'condition is true' : 'condition is false'} </p>

      {/* <MyButton /> */}

      <MyButton buttonText="My Button" buttonColor="red" onClick={buttonClicked} />

      <MyButton {...ButtonData} />

    </div>
  );
}

export default App;
