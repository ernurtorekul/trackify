import { Badge } from '@/components/ui/badge'
import ListComponent from '@/components/custom/list_component'
import DayComponent from '@/components/custom/day_component'

export default function Home() {
  return (
    <div className='p-4'>
      <div className='my-4'>
        <h2 className='text-lg font-bold'>Hey buddy! How are you?</h2>
        {/* //TODO: overflow  */}
        <div className='flex gap-2'>
          <DayComponent day={12} weekday='wed' active={true} />
          <DayComponent day={13} weekday='thu' />
          <DayComponent day={14} weekday='fri' />
          <DayComponent day={15} weekday='sat' />
          <DayComponent day={16} weekday='sun' />
          <DayComponent day={17} weekday='mon' />
          <DayComponent day={18} weekday='tue' />
          <DayComponent day={19} weekday='wed' />
          <DayComponent day={20} weekday='thu' />
          <DayComponent day={21} weekday='fri' />
          <DayComponent day={22} weekday='sat' />
          <DayComponent day={23} weekday='sun' />
          <DayComponent day={24} weekday='mon' />
          <DayComponent day={25} weekday='tue' />
        </div>
      </div>

      <div className='my-4'>
        <h2 className='text-lg font-bold'>Genres</h2>
        <div className='flex gap-2 my-2'>
          <Badge>All</Badge>
          <Badge variant='outline'>Action</Badge>
          <Badge variant='outline'>Adventure</Badge>
          <Badge variant='outline'>Strategy</Badge>
        </div>
      </div>

      <div className='my-4'>
        <h2 className='text-lg font-bold'>Series</h2>
        <ListComponent
          title='Rick and Morty: The Anime'
          released={true}
          image='https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg'
        />
        <ListComponent
          title='Rick and Morty: The Anime'
          released={false}
          image='https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg'
        />
        <ListComponent
          title='Rick and Morty: The Anime'
          released={true}
          image='https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg'
        />
        <ListComponent
          title='Rick and Morty: The Anime'
          released={true}
          image='https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg'
        />
        <ListComponent
          title='Rick and Morty: The Anime'
          released={true}
          image='https://data-vykhoda.ru/wp-content/uploads/2024/08/15.jpg'
        />
      </div>
    </div>
  )
}
