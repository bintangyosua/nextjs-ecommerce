export default function Login() {
  return (
    <form action="" method="post">
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col items-center justify-center w-1/5 bg-slate-100 rounded-3xl py-10 px-5">
          <h1 className="text-3xl font-bold">Login</h1>
          <div className="flex flex-col w-4/5">
            <label htmlFor="email" className="">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="h-8 w-full p-2 rounded-md my-2"
              placeholder="Email Address"
            />
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              name="password"
              id="password"
              className="h-8 w-full p-2 rounded-md my-2"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w=1/5 bg-slate-700 rounded-full my-2 h-10 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
