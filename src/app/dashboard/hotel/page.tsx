import BookingCalender from "@/components/core/BookingCalender";
import HomeBudgetComp from "@/components/core/HomeBudgetComp";
import Banner from "@/components/shared/Banner";
import HomeSideCardLayout from "@/components/shared/HomeSideCardLayout";
import HotelCardCarousel from "@/components/shared/HotelCardCarousel";
import HotelCardGrid from "@/components/shared/HotelCardGrid";
import Right_sidebar from "@/components/shared/Right-sidebar";
import prisma from "@/db";


export default async function Home() {
  // Fetch data from the database
  const allData = await prisma.hotel.findMany();
  // const DealData = await prisma.hotel.findMany(
  //   {
  //     where: {
  //       discount: true
  //     }
  //   }
  // );

  // Transform the data to match the expected structure
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
        <HotelCardCarousel
          title="Deal of the day"
          hotels={transformedData}
        />

        <Banner
          bgImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="we invest in the world potential"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          btn1="Explore Now"
          btn2="Learn More"
        />

        <HotelCardGrid
          title="All"
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