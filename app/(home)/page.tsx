import HomeCarousel from '@/components/shared/home/homeCarousel'
import data from '@/lib/data'

const page = () => {
  return (
    <div>
        <HomeCarousel items={data.carousels} />
    </div>
  )
}

export default page
