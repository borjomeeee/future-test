import React from "react";
import UtilsPanelComponent from "./components/UtilsPanel.component";
import TableComponent from "./components/Table.component";
import TableSubDataComponent from "./components/TableSubData.component";

function App() {
  return (
    <div className="content">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            Future - тестовое задание
          </span>
        </div>
      </nav>

      <UtilsPanelComponent />

      <TableComponent />

      <TableSubDataComponent />
    </div>
  );
}

export default App;
