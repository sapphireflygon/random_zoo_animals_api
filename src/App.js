import './App.css';
import AnimalContainer from './containers/AnimalsContainer';

function App() {
  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
        </style>
      </head>
      <div className='app'>
        <AnimalContainer/>
      </div>
    </>
  );
};

export default App;
