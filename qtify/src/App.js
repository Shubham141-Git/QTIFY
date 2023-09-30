import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/HeroImage/Hero";
import Card from "./components/card/Card";
import { fetchTopAlbums, fetchSongs, fetchNewAlbums } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section/Section";
import FAQ from "./components/FAQ/FAQ";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const [songsData, setSongsData] = useState([]);

  const [filterData, setFilterData] = useState([]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const generateData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
    //console.log(data);
  };

  const generateNewAlbumData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
    //console.log(data);
  };

  const generateAllSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilterData(res);
      // console.log(filterData, 1);
    } catch (err) {
      console.error(err);
    }
  };

  const generateDiffSongs = (value) => {
    let key1;
    if (value === 0) {
      getFilterValue(songsData);
      return;
    } else if (value === 1) {
      key1 = "rock";
      // console.log(key1);
    } else if (value === 2) {
      key1 = "pop";
    } else if (value === 3) {
      key1 = "jazz";
    } else if (value === 4) {
      key1 = "blues";
    }

    const res = songsData.filter((item) => {
      return item.genre.key === key1;
    });
    //console.log(res);
    getFilterValue(res);
  };

  const getFilterValue = (val) => {
    setFilterData(val);
    console.log(filterData);
  };

  useEffect(() => {
    generateDiffSongs(value);
  }, [value]);

  useEffect(() => {
    generateData();
    generateNewAlbumData();
    generateAllSongs();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Hero />

      <Section data={topAlbumsData} title="Top Albums" />
      <Section data={newAlbumsData} title="New Albums" />
      <Section
        data={filterData}
        title="Songs"
        value={value}
        handleChange={handleChange}
      />
      <FAQ />
    </div>
  );
}

export default App;
