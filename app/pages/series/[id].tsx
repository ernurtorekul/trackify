"use client";
import { ChevronLeft, SaveIcon } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Details() {
  const seriesData = [
    {
      id: 1,
      title: "Rick and Morty: The Anime",
      released: true,
      image: "https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      releaseDate: "14th of October",
      studio: "Anilibria",
      genre: "Animation",
      episodes: [
        { number: 1, premiereDate: "14th October" },
        { number: 2, premiereDate: "21st October" },
        { number: 3, premiereDate: "28th October" },
      ],
    },
  ];

  const router = useRouter();
  const { id } = router.query;

  const [series, setSeries] = useState<null | (typeof seriesData)[0]>(null);

  useEffect(() => {
    if (id) {
      const selectedSeries = seriesData.find((item) => item.id === Number(id));
      setSeries(selectedSeries ?? null);
    }
  }, [id]);

  if (!series) {
    return <div>loading ...</div>;
  }

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
          style={{ backgroundImage: `url(${series.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-500 opacity-70 rounded-t-3xl"></div>
        </div>
        <div className="absolute bottom-6 left-6 z-10 text-white font-bold text-3xl">
          {series.title}
        </div>
      </div>

      <div className="mt-8 px-4 space-x-3 flex items-center justify-center">
        <button className="px-6 py-2 bg-gradient-to-r from-gray-300 to-gray-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all">
          Watch Now
        </button>
        <div>|</div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <SaveIcon
            size={25}
            className="text-gray-800 hover:text-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="mt-6 px-6 py-4 bg-white rounded-2xl shadow-lg space-y-4">
        <p className="text-gray-600 text-sm">{series.description}</p>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold">Series Information</h2>
          <div className="flex flex-col gap-1">
            <div>
              <strong>Original Name:</strong>
              {series.title}
            </div>
            <div>
              <strong>Release Date:</strong>
              {series.releaseDate}
            </div>
            <div>
              <strong>Studio:</strong>
              {series.studio}
            </div>
            <div>
              <strong>Genre:</strong>
              {series.genre}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto my-4">
          <table className="min-w-full table-auto border-separate border-spacing-2">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="px-4 py-2 text-left">Number of Series</th>
                <th className="px-4 py-2 text-left">Premiere Date</th>
              </tr>
            </thead>
            <tbody>
              {series.episodes.map((episode) => (
                <tr className="border-b border-gray-300" key={episode.number}>
                  <td className="px-4 py-2">{episode.number}</td>
                  <td className="px-4 py-2">{episode.premiereDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Details;
