import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/HeroImage/Hero";
import Card from "./components/card/Card";
import { fetchTopAlbums, fetchSongs } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const [songsData, setSongsData] = useState([]);

  const [filterData, setFilterData] = useState([]);

  const generateData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
    console.log(data);
  };

  const generateAllSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateData();
    generateAllSongs();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* {topAlbumsData.map((item) => {
        return <Card type="album" data={item} key={item.id} />;
      })} */}
      <Section data={topAlbumsData} title="Top Albums" />
    </div>
  );
}

export default App;
