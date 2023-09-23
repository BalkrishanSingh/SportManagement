import { Carousel } from "@material-tailwind/react";
 
export default function CarouselTransition() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Carousel transition={{ duration: 2 }} className="rounded-xl ">
      <img
        src="/home/sharnjeets/Desktop/pic1.jpeg"
        alt="image 1"
        style={{ height: "400px", width: "2000px", objectFit: "cover" }}
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        style={{ height: "400px", width: "2000px", objectFit: "cover" }}
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        style={{ height: "400px", width: "2000px", objectFit: "cover" }}
      />
    </Carousel>
    </div>
  );
}