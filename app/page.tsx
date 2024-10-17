"use client";
import { Badge } from "@/components/ui/badge";
import ListComponent from "@/components/custom/list_component";
import DayComponent from "@/components/custom/day_component";
import { useEffect, useState } from "react";
import Pagination from "@/components/custom/pagination";
import { Endpoint } from "./config/Endpoint";

const getWeekday = (date: Date) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[date.getDay()];
};

export default function Home() {
  const [days, setDays] = useState<
    { day: number; weekday: string; active: boolean }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [series, setSeries] = useState<any[]>([]);
  const [seriesCount, setSeriesCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(seriesCount / itemsPerPage);

  useEffect(() => {
    const generatedDays = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);

      generatedDays.push({
        day: nextDate.getDate(),
        weekday: getWeekday(nextDate),
        active: i === 0,
      });
    }
    setDays(generatedDays);
  }, []);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(
          `${Endpoint.baseUrl}${Endpoint.seriesGetAll}`
        );
        if (!response.ok) {
          throw new Error("failed fetching series");
        }
        const data = await response.json();
        setSeries(data.data);
        setSeriesCount(data.count);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchSeries();
  }, []);

  const paginatedSeries = series.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <p>loading ...</p>;

  if (error) return <p>error: {error}</p>;

  return (
    <div className="p-4 pb-16">
      <div className="my-4">
        <h2 className="text-2xl flex justify-center font-bold mb-4">
          Welcome to TrackIfy
        </h2>
        {/* //TODO: overflow  */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar px-4 snap-x ">
          {days.map((dayObj, index) => (
            <DayComponent
              key={index}
              day={dayObj.day}
              weekday={dayObj.weekday}
              active={dayObj.active}
            />
          ))}
        </div>
      </div>

      {/* <div className="my-4">
        <h2 className="text-lg font-bold">Genres</h2>
        <div className="flex gap-2 my-2 w-fit h-8">
          <Badge className="text-md">All</Badge>
          <Badge className="text-md" variant="outline">
            Action
          </Badge>
          <Badge className="text-md" variant="outline">
            Adventure
          </Badge>
          <Badge className="text-md" variant="outline">
            Strategy
          </Badge>
        </div>
      </div> */}

      <div className="my-4">
        <h2 className="text-lg font-bold">Series</h2>
        {paginatedSeries.length > 0 ? (
          paginatedSeries.map((item) => (
            <ListComponent
              key={item.id}
              id={item.id}
              title={item.name}
              released={item.releaseDate}
              genres={item.genres}
              image={item.imageUrl}
            />
          ))
        ) : (
          <p>no series found</p>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
