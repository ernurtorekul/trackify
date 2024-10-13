"use client";
import { Badge } from "@/components/ui/badge";
import ListComponent from "@/components/custom/list_component";
import DayComponent from "@/components/custom/day_component";
import { useEffect, useState } from "react";
import Pagination from "@/components/custom/Pagination";

const getWeekday = (date: Date) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[date.getDay()];
};

export default function Home() {
  const [days, setDays] = useState<
    { day: number; weekday: string; active: boolean }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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

  const series = [
    {
      title: "Rick and Morty: The Anime",
      released: true,
      image: "https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg",
    },
    {
      title: "Rick and Morty: The Anime",
      released: true,
      image: "https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg",
    },
    {
      title: "Rick and Morty: The Anime",
      released: true,
      image: "https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg",
    },
    {
      title: "Rick and Morty: The Anime",
      released: true,
      image: "https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg",
    },
    {
      title: "Rick and Morty: The Anime",
      released: true,
      image: "https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg",
    },
    {
      title: "Rick and Morty: The Anime",
      released: true,
      image: "https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg",
    },
    {
      title: "Rick and Morty: The Anime",
      released: true,
      image: "https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg",
    },
  ];

  const totalPages = Math.ceil(series.length / itemsPerPage);
  const paginatedSeries = series.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4">
      <div className="my-4">
        <h2 className="text-lg font-bold">Hey buddy! How are you?</h2>
        {/* //TODO: overflow  */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar px-4 mx-2 snap-x">
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

      <div className="my-4">
        <h2 className="text-lg font-bold">Genres</h2>
        <div className="flex gap-2 my-2">
          <Badge>All</Badge>
          <Badge variant="outline">Action</Badge>
          <Badge variant="outline">Adventure</Badge>
          <Badge variant="outline">Strategy</Badge>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-lg font-bold">Series</h2>
        {paginatedSeries.map((item, index) => (
          <ListComponent
            key={index}
            title={item.title}
            released={item.released}
            image={item.image}
          />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
