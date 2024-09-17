import React, { useEffect, useState } from "react";
import { getShortName } from "../sharedFuc/shared";

export default function Card({ tracks, loading }) {
  return (
    <>
      <div className="container overflow-auto">
        {loading ? (
          <div className="row">
            <div className="col-12 py-5 text-center">
              <div
                className="spinner-grow"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            {tracks.map((track) => (
              <div className="col-lg-4 col-md-6 col-sm-12 py-3">
                <div className="card w-100">
                  <div className="d-flex align-items-center justify-content-center p-2">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60%",
                        width: "60%",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "1px solid gray",
                        boxShadow:
                          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                      }}
                    >
                      {loading ? (
                        <div className="row">
                          <div className="col-12 py-5 text-center">
                            <div
                              className="spinner-grow"
                              style={{ width: "3rem", height: "3rem" }}
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={track.album.images[0].url}
                          className="card-img-top"
                          alt="..."
                          onLoad={(e) =>
                            (e.target.src = track.album.images[0].url)
                          }
                          style={{ display: loading ? "none" : "block" }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center p-2">
                      <h5
                        className="card-title"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-title={track.name}
                      >
                        {getShortName(track.name, 20)}
                      </h5>
                    </div>
                    <h6 className="card-text">
                      Artist: {getShortName(track.artists[0].name, 15)}
                    </h6>
                    <h6 className="card-text">
                      Release Date: {track.album.release_date}
                    </h6>
                    <div className="">
                      <audio
                        src={track.preview_url}
                        controls
                        className="w-100 border rounded p-2 shadow-sm bg-red"
                      ></audio>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
