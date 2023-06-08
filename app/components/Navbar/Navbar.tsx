export default function Navbar() {
  return (
    <>
      <div className="flex justify-around items-center  text-black h-16 border-2">
        <div>
          <h1 className="text-xl font-bold">
            <a href="/">TheGreenYard</a>
          </h1>
        </div>
        <div className="flex w-2/12 justify-evenly font-semibold">
          <span className="">Profile</span>
          <span className="">Wish</span>
          <span className="">Cart</span>
          <span className="">
            <a href="/login">Login</a>
          </span>
        </div>
      </div>
      <div className="grid justify-items-center">
        <div className="flex justify-around items-center h-14 w-1/5 justify-self-center font-semibold">
          <span>Deals</span>
          <span>Stores</span>
          <span>Plants</span>
        </div>
      </div>
    </>
  );
}
