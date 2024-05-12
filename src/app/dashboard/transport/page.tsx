import BookingCalender from "@/components/core/BookingCalender";
import ChatSideComp from "@/components/core/ChatSideComp";
import HeroSection from "@/components/core/HeroSection";
import HomeBudgetComp from "@/components/core/HomeBudgetComp";
import TransportSearchComp from "@/components/core/TransportSearchComp";
import HomeSideCardLayout from "@/components/shared/HomeSideCardLayout";
import HotelCardCarousel from "@/components/shared/HotelCardCarousel";
import Right_sidebar from "@/components/shared/Right-sidebar";


export default function Home() {
  return (
    <div className="grid grid-cols-12 relative">
      <section className="col-start-1 col-end-10 pt-4 mx-6 flex flex-col gap-8">
        <TransportSearchComp />
      </section>

      <Right_sidebar>
        <ChatSideComp />
      </Right_sidebar>
    </div>
  );
}
