import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
import { SearchIcon } from 'lucide-react'

const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories', 'Electronics', 'Clothing', 'Books', 'Home', 'Toys', 'Sports']

const search = async () => {
  return (
    <form action='/search' method='GET' className='flex items-stretch h-10'>
        <Select name='category'>
            <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md'>
                <SelectValue placeholder='All'></SelectValue>
            </SelectTrigger>
            <SelectContent position='popper'>
                {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        <Input
            className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
            placeholder={`Search site ${APP_NAME}`}
            name='q'
            type='search'
        />
        <button
            type='submit'
            className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2'>
            <SearchIcon className='h-6 w-6' />
        </button>
    </form>
  )
}

export default search;