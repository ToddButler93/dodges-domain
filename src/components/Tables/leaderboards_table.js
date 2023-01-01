import React, { useEffect, useState } from "react";
import MaterialTable, { Column } from "@material-table/core";

function LeaderboardTable() {

  const [data, setData] = useState([])

  const columns=[
    { title: "Player", field: "username", width: 120 },
    { title: "Map", field: "map", width: 150 },
    { title: "Time", field: "time", width: 100 },
    { title: "Date", field: "date", width: 90 },
    { title: "Video", field: "videoUrl", width: 75 },
    { title: "Route File", field: "routeUrl", width: 75 },
    { title: "Game Mode", field: "gameMode", width: 125 },
  ]

  useEffect(()=>{
    fetch("/text/leaderboards/leaderboards.json")
    .then(resp=>resp.json())
    .then(resp=>{
      console.log(resp)
      setData(resp)
    })
  },[])

  return (
    <MaterialTable
      title="Leaderboards"
      data={data}
      columns={columns}
      options={{
        columnsButton: true,
        thirdSortClick: false,
        filtering: true,
      }}
    />
  );
}

export default LeaderboardTable;