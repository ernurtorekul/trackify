import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div>
      <div>Some calendar</div>
      <div>
        <h2>Genres</h2>
        <div className='flex gap-2 my-2'>
          <Badge>All</Badge>
          <Badge variant='outline'>Action</Badge>
          <Badge variant='outline'>Adventure</Badge>
          <Badge variant='outline'>Strategy</Badge>
        </div>
      </div>

      <div></div>
    </div>
  )
}
