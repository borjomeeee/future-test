import React, { useState } from "react";

import UtilsPanelComponent from "./components/UtilsPanel.component";
import TableComponent from "./components/Table.component";

import LoadingContext from "./context";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
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
      </div>
    </LoadingContext.Provider>
  );
}

export default App;
