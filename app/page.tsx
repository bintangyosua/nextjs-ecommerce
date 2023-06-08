// import HomeLayout from "./layouts/HomeLayout";

import Plants from "./components/Plants/Plants";
import HomeLayout from "./layouts/HomeLayout";

export default function Home() {
  return (
    <>
      <HomeLayout>
        <div className="mb-20">
          <img src="/banner.avif" alt="" />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-extrabold my-10 font-serif">
              Our top stars
            </h1>
            <div className="flex flex-wrap justify-center items-center w-2/3">
              <Plants />
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
