import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { Details } from "./pages/details/Details";
import { SearchResult } from "./pages/searchResult/SearchResult";
import { Explore } from "./pages/explore/Explore";
import { pageNotFound } from "./pages/404/PageNotFound";


function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  const apiTesting = () => {
    fetchDataFromAPI("/movie/popular").then((data) => {
      console.log(data);
      dispatch(getApiConfiguration(data));
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return (
    <div className="App">
      App
      {url?.total_pages}
    </div>
  );
}

export default App;
