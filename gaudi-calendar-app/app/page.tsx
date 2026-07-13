import Image from "next/image";

export default function Home() {
  return (
    <div data-name="top-level-container" className="m-8">
      <main data-name="calendar-content" className="">
        <div data-name="top-bar" className="mb-1 flex">
          <button className="outline hover:bg-blue-50">TODAY</button>
          <button className="">
            <Image className="fill-blue-50" src="/left-arrow.svg" alt="left arrow button" width={20} height={20}/>
          </button>
          <button className="">
            <Image className="fill-blue-50" src="/right-arrow.svg" alt="right arrow button" width={20} height={20}/>
          </button>
          <div>July 2026</div>
        </div>
        <div data-name="calendar-grid" className="grid grid-cols-7 gap-4">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
      </main>
    </div>
  );
}
