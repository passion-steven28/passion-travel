import BookingCalender from "@/components/core/BookingCalender";
import HeroSection from "@/components/core/HeroSection";
import HomeBudgetComp from "@/components/core/HomeBudgetComp";
import HomeSideCardLayout from "@/components/shared/HomeSideCardLayout";
import HotelCardCarousel from "@/components/shared/HotelCardCarousel";
import Right_sidebar from "@/components/shared/Right-sidebar";

const hotels = [
  {
    name: "Hotel Sunshine",
    location: "California, USA",
    rating: 4.5,
    price: 120,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Ocean View",
    location: "Florida, USA",
    rating: 4.2,
    price: 95,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Mountain Retreat",
    location: "Colorado, USA",
    rating: 4.8,
    price: 135,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Urban Hotel",
    location: "New York, USA",
    rating: 4.3,
    price: 110,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Countryside B&B",
    location: "Vermont, USA",
    rating: 4.6,
    price: 70,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Desert Mirage",
    location: "Nevada, USA",
    rating: 4.1,
    price: 85,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Grand Royal",
    location: "Texas, USA",
    rating: 4.9,
    price: 190,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Airport Inn",
    location: "Chicago, USA",
    rating: 3.9,
    price: 65,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Snowy Lodge",
    location: "Alaska, USA",
    rating: 4.7,
    price: 150,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Beachside Villa",
    location: "Hawaii, USA",
    rating: 4.4,
    price: 125,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];
export default function Home() {
  return (
    <div className="grid grid-cols-12 relative">
      <section className="col-start-1 col-end-10 pt-4 mx-6 flex flex-col gap-8">
        <div className="mx-8">
          <HeroSection
            name="passion steven"
          />
        </div>
        <HotelCardCarousel
          title="popular destination"
          hotels={hotels}
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