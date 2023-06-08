import HomeLayout from "@/app/layouts/HomeLayout";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Product({ params }: { params: { id: string } }) {
  const response = await prisma.product.findUnique({
    where: {
      prod_id: parseInt(params.id),
    },
  });

  console.log(response);

  return (
    <div>
      <HomeLayout>
        <div className="flex justify-center">
          <div className="flex justify-center w-3/5">
            <img
              src={`/plants/${response?.prod_image}`}
              alt=""
              className="h-[480px] w-[384px]"
            />
            <div className="ml-5 w-full">
              <h2 className="text-3xl font-bold">{response?.prod_name}</h2>
              <img src="/star.svg" alt="" className="h-[15px] inline" />
              <img src="/star.svg" alt="" className="h-[15px] inline" />
              <img src="/star.svg" alt="" className="h-[15px] inline" />
              <img src="/star.svg" alt="" className="h-[15px] inline" />
              <img src="/star.svg" alt="" className="h-[15px] inline" />
              <span className="text-gray-400 text-sm ml-1">
                (0 customer reviews)
              </span>
              <hr className="border-slate-400 my-2" />
              <h3 className="font-semibold block">Size</h3>
              <span className="inline-block">
                <span className="rounded-full bg-slate-200 h-10 w-10 flex items-center justify-center">
                  S
                </span>
              </span>
              <span className="inline-block">
                <span className="rounded-full bg-slate-200 h-10 w-10 flex items-center justify-center mx-1">
                  M
                </span>
              </span>
              <hr className="border-slate-400 my-2" />
              <span className="text-xs font-semibold">
                {response?.prod_name}
              </span>
              <div className="flex justify-between w-1/6">
                <span className="inline-block">
                  <span className="rounded-full bg-slate-200 h-8 w-8 flex items-center justify-center">
                    -
                  </span>
                </span>
                <span>0</span>
                <span className="inline-block">
                  <span className="rounded-full bg-slate-200 h-8 w-8 flex items-center justify-center">
                    +
                  </span>
                </span>
              </div>
              <hr className="border-slate-400 my-2" />
              <div className="flex justify-between">
                <h3 className="font-semibold">Total:</h3>
                <span className="font-semibold">{response?.prod_price}</span>
              </div>
              <hr className="border-slate-400 my-2" />
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span>- The most Exclusive Houseplant</span>
                  <span>- The Largest range of baby plants</span>
                  <span>- Straight fron the nursery</span>
                </div>
                <div>
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
              <hr className="border-slate-400 my-2" />
              <h3 className="font-semibold">About this plant</h3>
              <p>{response?.prod_desc}</p>
            </div>
          </div>
        </div>
      </HomeLayout>
    </div>
  );
}
