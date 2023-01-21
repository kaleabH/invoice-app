import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import TableRow from "./components/TableRow";
function App() {
  const searchFilterFunction = (text) => {
    console.log("text ", text);
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = data.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item["PO#"]
          ? // const itemData = item.phone
            item["PO#"]
          : "";
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      // setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(data);
      // setSearch(text);
    }
  };
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/invoice.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  useEffect(() => {
    setFilteredDataSource(data);
  }, [data]);
  return (
    <div className="App container mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <div className="panel">
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-sm-3 col-xs-12">
                    <h4 className="title">
                      Data <span>List</span>
                    </h4>
                  </div>
                  <div className="col-sm-9 col-xs-12 text-right">
                    <SearchBox
                      search={search}
                      setSearch={setSearch}
                      searchFilterFunction={searchFilterFunction}
                    />
                  </div>
                </div>
              </div>
              <div className="panel-body table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>PO#</th>
                      <th>Invoice Date</th>
                      <th>Due Date</th>
                      <th>Early Pay Deduction</th>
                      <th>Invoice Amount</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDataSource.map((d) => (
                      <TableRow {...d} key={d["PO#"]} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <div className="row">
                  <div className="col col-sm-6 col-xs-6"></div>
                  <div
                    className="col-sm-6 col-xs-6"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>Early Pay Total: -$0.00</div>
                    <div>Invoice Total: $18,318.36 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
