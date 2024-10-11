export default function DayComponent({
  day,
  weekday,
  active = false,
}: {
  day: number
  weekday: string
  active?: boolean
}) {
  return (
    <div className='flex my-2 flex-shrink-0 w-[60px] sm:w-[70px] lg:w-[80px]'>
      <div
        className={`${active ? 'bg-black text-slate-200' : 'bg-slate-200 text-black'} py-2 px-1 rounded-full flex flex-col items-center cursor-pointer`}
      >
        <div className='text-sm font-bold py-1'>{weekday.toUpperCase()}</div>
        <div className={`text-sm ${active ? 'bg-gray-800' : 'bg-slate-300'} p-2 rounded-full`}>{day}</div>
      </div>
    </div>
  )
}
