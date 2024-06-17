import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import { FetchData } from "../components/FetchData";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LoadingSpinner } from "../components/LoadingSpinner";

function App() {
  const fetchdone = useSelector((store) => store.FetchStatus.fetchdone);
  console.log(fetchdone);
  return (
    <>
      <Header />
      <FetchData />
      {fetchdone ? <Outlet /> : <LoadingSpinner />}
      <Footer />
    </>
  );
}

export default App;
