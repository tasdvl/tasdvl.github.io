import './App.css';
import TerminalBox from './TerminalBox';
import MainpageText from './Landingpage/MainpageText';

function App() {
  return (
	<div className="App">
  	    <TerminalBox text={<MainpageText />} cmd="neofetch"/>
	</div>
  );
}

export default App;
