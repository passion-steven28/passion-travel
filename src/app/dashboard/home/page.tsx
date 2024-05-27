import BookingCalender from "@/components/core/BookingCalender";
import HeroSection from "@/components/core/HeroSection";
import HomeBudgetComp from "@/components/core/HomeBudgetComp";
import HomeSideCardLayout from "@/components/shared/HomeSideCardLayout";
import HotelCardCarousel from "@/components/shared/HotelCardCarousel";
import Right_sidebar from "@/components/shared/Right-sidebar";
import prisma from "@/db";
import { getCldImageUrl } from "next-cloudinary";


export default async function Home() {
  const allData = await prisma.hotel.findMany();
  const hotel = await prisma.hotel.findMany({
    select: {
      imgID: true
    }
  });

  const urls = hotel.map(hotelItem => {
    return getCldImageUrl({
      width: 'fill',
      height: 'fill',
      src: hotelItem.imgID // Now correctly accessing imgID property of each item in the array
    });
  });

  const transformedData = allData.map(hotel => ({
    name: hotel.name,
    location: hotel.location,
    rating: hotel.rate || 0, // Assuming 'rate' is the correct field name in your database
    price: hotel.price,
    image: hotel.imgID, // Assuming 'imgID' corresponds to the image URL
  }));
  return (
    <div className="grid grid-cols-12 relative">
      <section className="col-start-1 col-end-10 pt-4 mx-6 flex flex-col gap-8">
        <div className="mx-8">
          <HeroSection
            url={urls}
            userName="passion steven"
            name="hotel"
          />
        </div>
        <HotelCardCarousel
          title="popular destination"
          hotels={transformedData}
        />
      </section>

      <Right_sidebar>
        <HomeSideCardLayout
          title="Booking Calender"
        >
          <BookingCalender />
        </HomeSideCardLayout>
        <HomeSideCardLayout
          title="estimated budget"
        >
          <HomeBudgetComp />
        </HomeSideCardLayout>
      </Right_sidebar>
    </div>
  );
}