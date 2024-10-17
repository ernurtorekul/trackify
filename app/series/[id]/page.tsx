"use client";
import { ChevronLeft, SaveIcon } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Endpoint } from "@/app/config/Endpoint";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Series {
  id: number;
  name: string;
  description: string;
  releaseDate: string;
  imageUrl: string;
  trailerUrl: string;
  genres: string;
  href: string;
  episodes: Episode[];
}

interface Episode {
  numberEpisode: number;
  title: string;
  releaseDate: string;
  released: boolean;
}

function Details() {
  const router = useRouter();
  const { id } = useParams();

  const [series, setSeries] = useState<Series | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSeries = async () => {
      if (!id) return;
      // const url = `${Endpoint.baseUrl}${Endpoint.parsing}${Endpoint.seriesGet(Number(id))}`;
      const seriesData = await fetch(
        `${Endpoint.baseUrl}${Endpoint.seriesGet(Number(id))}`
      );
      const seriesJson = await seriesData.json();
      const hrefValue = seriesJson.href;
      const url = `${Endpoint.baseUrl}${Endpoint.parsing}${encodeURIComponent(hrefValue)}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("failed fetching series");
        }
        const data = await response.json();
        console.log("API Response Data:", data);
        setSeries(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSeries();
  }, [id]);

  if (loading) return <p>loading ...</p>;
  if (error) return <p>error: {error}</p>;
  if (!series) return <p>No series found</p>;

  // const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  // useEffect(() => {
  //   if (id) {
  //     const seriesDetail = series.find((s) => s.id === Number(id));
  //     if (seriesDetail) {
  //       setSelectedSeries(seriesDetail);
  //     }
  //   }
  // }, [id]);

  // if (!selectedSeries) {
  //   return <div>loading ...</div>;
  // }

  return (
    <div className="h-screen w-full flex flex-col bg-gray-100 mb-8">
      <div className="relative w-full bg-gray-300 rounded-b-3xl shadow-lg">
        <div className="absolute top-6 left-6 z-10">
          <div className="w-fit h-fit p-2 bg-gray-300 opacity-80 rounded-full transition-all">
            <ChevronLeft
              size={28}
              className="cursor-pointer text-gray-800"
              onClick={() => router.back()}
            />
          </div>
        </div>
        <div
          className="w-full h-64 bg-cover bg-center rounded-t-3xl"
          style={{ backgroundImage: `url(${series.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-500 opacity-70 rounded-t-3xl"></div>
        </div>
        <div className="absolute bottom-6 left-6 z-10 text-white font-bold text-3xl">
          {series.name}
        </div>
      </div>

      <div className="mt-8 px-4 space-x-3 flex items-center justify-center">
        {/* <button className="px-6 py-2 bg-gradient-to-r from-gray-300 to-gray-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all">
          Watch Now
        </button> */}
        <Button
          className="bg-gray-600 rounded-full px-6"
          onClick={() => window.open(series.trailerUrl, "_blank")}
        >
          Watch Now
        </Button>
        <div>|</div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <SaveIcon
            size={25}
            className="text-gray-700 hover:text-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="mt-6 px-6 py-4 bg-white rounded-2xl shadow-lg space-y-4">
        <p className="text-gray-600 text-sm">{series.description}</p>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Series Information</h2>
          <div className="flex flex-col gap-1">
            <div>
              <strong>Original Name: </strong>
              {series.name}
            </div>
            <div>
              <strong>Release Date: </strong>
              {format(new Date(series.releaseDate), "MMM dd, yyyy")}
            </div>
            {/* <div>
              <strong>Studio:</strong>
              {series.trailerUrl}
            </div> */}
            <div>
              <strong>Genre: </strong>
              {series.genres}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto my-4">
          <Table className="min-w-full table-auto border-separate border-spacing-2">
            <TableHeader>
              <TableRow className="bg-gray-200 text-gray-900">
                <TableHead className="px-4 py-2 text-left">
                  Number of Series
                </TableHead>
                <TableHead className="px-4 py-2 text-left">
                  Premiere Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {series.episodes &&
                Array.isArray(series.episodes) &&
                series.episodes.map((episode: Episode) => (
                  <TableRow
                    className="border-b border-gray-300"
                    key={episode.numberEpisode}
                  >
                    <TableCell className="px-4 py-2">
                      {episode.numberEpisode + 1}
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      {/* {episode.premiereDate} */}
                      {format(new Date(episode.releaseDate), "MM/dd/yyyy")}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Details;
