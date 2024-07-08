import Image from "next/image";
import { TestimonialCarousel,TestimonialList } from "@piyushwankhade/tii-components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TestimonialList/>
    </main>
  );
}
