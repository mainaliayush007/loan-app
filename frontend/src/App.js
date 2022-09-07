import React from "react";
import './App.css';
import HomePage from './page/HomePage';
import {QueryClient, QueryClientProvider} from  "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";

const queryClient = new QueryClient();
function App() {
  return (
    <>
    <Header/>
   <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
   </QueryClientProvider>
   </>
  );
}

export default App;
