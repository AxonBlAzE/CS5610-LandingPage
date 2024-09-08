import './App.css';
import TableRow from "./Components/tableRows";

function App() {
  return (
    <div className="App">
      <h1>
        Shreyans Mulkutkar
      </h1>
      <h2>
        CS5610 - 20596
      </h2>
      <table>
        <thead>
          <tr>
            <th>
              Assignment Name
            </th>
            <th>
              Description
            </th>
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow 
            name = "Assignment 1"
            description = "Created a landing page for CS5610 that will contain the hyperlinks to all the following assignments."
            url = 'https://main--cs5610-landingpage-shreyansmulkutkar.netlify.app/' 
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
