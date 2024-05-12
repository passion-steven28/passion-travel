import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '../ui/card'
import HotelCard from './HotelCard'

type Props = {
  title: string,
  hotels: Array<{ name: string, location: string, rating: number, price: number, image: string }>
}

export default function HotelCardGrid({ title, hotels }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            location={hotel.location}
            rating={hotel.rating}
            price={hotel.price}
            image={hotel.image}
          />
        ))}
      </CardContent>
    </Card>
  );
}
