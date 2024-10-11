'use client'
import { Badge } from "@/components/ui/badge";
import ListComponent from "@/components/custom/list_component";
import DayComponent from "@/components/custom/day_component";
import { useEffect, useState } from "react";

const getWeekday = (date: Date) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[date.getDay()];
};

export default function Home() {
  const [days, setDays] = useState<
    { day: number; weekday: string; active: boolean }[]
  >([]);

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
        <ListComponent
          title="Rick and Morty: The Anime"
          released={true}
          image="https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg"
        />
        <ListComponent
          title="Rick and Morty: The Anime"
          released={false}
          image="https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg"
        />
        <ListComponent
          title="Rick and Morty: The Anime"
          released={true}
          image="https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg"
        />
        <ListComponent
          title="Rick and Morty: The Anime"
          released={true}
          image="https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg"
        />
        <ListComponent
          title="Rick and Morty: The Anime"
          released={true}
          image="https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg"
        />
      </div>
    </div>
  );
}
