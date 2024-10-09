import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import Image from 'next/image'
export default function ListComponent({ title, released, image }: { title: string; released: boolean; image: string }) {
  return (
    <Alert className='flex items-center gap-2 my-2'>
      <Image src={image} alt={title} width={100} height={100} className='rounded-md' />
      <div>
        <AlertTitle className='text-lg font-bold'>{title}</AlertTitle>
        <AlertDescription className={`text-sm ${released ? 'text-green-600' : 'text-red-600'}`}>
          {released ? 'Released' : 'Not released'}
        </AlertDescription>
      </div>
    </Alert>
  )
}
