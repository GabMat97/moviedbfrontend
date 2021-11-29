import './App.css';
import Table from './TableComponent.js';
import CreateFilmComponent from './AddComponent.js'
import SearchBarComponent from './SearchBarComponent.js'


 function App() {
   return (
     <div className="App">
       <CreateFilmComponent />
       {/* <SearchBarComponent /> */}
       <Table />
     </div>
   );
 }

 export default App;