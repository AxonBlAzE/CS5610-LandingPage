import './App.css';
import TableRow from "./Components/tableRows";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <h1>
        Shreyans Mulkutkar
      </h1>
      <h2>
        CS5610 - 20596
      </h2>
      <div class="button-container">
        <a href='https://github.com/AxonBlAzE/CS5610-LandingPage'><button class="button"> Landing Page Repo <FaGithub/></button></a>
        <a href='https://main--kanbas-webapp-sm.netlify.app/'><button class="button"> Go to Kanbas <BsArrowUpRightSquare/></button></a>
        <a href='https://github.com/AxonBlAzE/CS5610-Kanbas'><button class="button"> Kanbas Repo <FaGithub/></button></a>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              Assignment
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
            name = "A1"
            description = "Created a landing page for CS5610 that will contain the hyperlinks to all the following assignments."
            url = 'https://main--cs5610-landingpage-shreyansmulkutkar.netlify.app/' 
          />
          <TableRow 
            name = "A2"
            description = "Coming Soon..."
            url = '' 
          />
          <TableRow 
            name = "A3"
            description = "Coming Soon..."
            url = '' 
          />
          <TableRow 
            name = "A4"
            description = "Coming Soon..."
            url = '' 
          />
          <TableRow 
            name = "A5"
            description = "Coming Soon..."
            url = '' 
          />
          <TableRow 
            name = "A6"
            description = "Coming Soon..."
            url = '' 
          />
        </tbody>
      </table>
    </div>
  );
}

export default App;
