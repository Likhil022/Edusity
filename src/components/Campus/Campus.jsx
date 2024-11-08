import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";

function Campus() {
  return (
    <>
      <div className="flex gap-9 px-8 w-full overflow-hidden pl-28 mb-12">
        <img className="rounded-2xl h-80 basis-1" src={gallery_1} alt="" />
        <img className="rounded-2xl h-80 basis-1" src={gallery_2} alt="" />
        <img className="rounded-2xl h-80 basis-1" src={gallery_3} alt="" />
        <img className="rounded-2xl h-80 basis-1" src={gallery_4} alt="" />
      </div>
      <div className="flex justify-center w-full mb-12">
        <button className="w-56 h-16 text-lg mx-auto  bg-blue-800 text-white border-2 border-black rounded-full">
          See More here
        </button>
      </div>
    </>
  );
}

export default Campus;
