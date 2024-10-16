import React from "react";
import { Endpoint } from "../config/Endpoint";

function page() {
  const allSeriesUrl = `${Endpoint.baseUrl}${Endpoint.seriesGetAll}`;
  console.log(allSeriesUrl);
  return <div>page</div>;
}

export default page;
