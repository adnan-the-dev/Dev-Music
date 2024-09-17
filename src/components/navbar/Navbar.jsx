import React, { useEffect, useState } from "react";
import Card from "../musicCard/Card";
import { generateRandomMusicName } from "../sharedFuc/shared";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    setLoading(true);
    const response = await fetch(
      `https://v1.nocodeapi.com/adnandev320/spotify/NLtIWNXgxMLegOne/search?q=${
        searchValue === "" ? generateRandomMusicName() : searchValue
      }&type=track`
    );
    const data = await response.json();
    setTracks(data?.tracks?.items);
    setLoading(false);
  };

  useEffect(() => {
    getTracks();
  }, [searchValue]);
  return (
    <>
      <div className="full-height bg-dark">
        <div className="d-flex align-items-center justify-content-center p-2 text-white sticky-top">
          <h1>Dev Music</h1>
        </div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top">
          <div className="container-fluid">
            {/* <button
              className="navbar-toggler d-flex align-items-center justify-content-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button> */}
            <div
              className="collapse navbar-collapse d-flex align-items-center justify-content-center"
              id="navbarSupportedContent"
            >
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="form-control me-2"
                style={{ width: '83%' }}
                type="search"
                placeholder="Search Music"
                aria-label="Search"
              />
            </div>
          </div>
        </nav>
        <div className="h-100 overflow-auto">
          <Card tracks={tracks} loading={loading} />
        </div>
      </div>
    </>
  );
}
