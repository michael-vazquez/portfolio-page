import "./App.css";
import ReactPageScroller from "react-page-scroller";
import React, { useState } from "react";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import AppTheme from "./utils/AppTheme";

const theme = createMuiTheme(AppTheme);

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Intro />
        <Resume />
        <Contact />
      </ReactPageScroller>
    </ThemeProvider>
  );
}

export default App;
