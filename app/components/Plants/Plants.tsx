import { PrismaClient } from "@prisma/client";

export default async function Plants() {
  const prisma = new PrismaClient();

  const plants = await prisma.product.findMany();
  console.log(plants);

  return (
    <>
      <div className="mx-2 flex flex-wrap">
        {plants.map((plant) => (
          <div key={plant.prod_id} className="mx-2 flex flex-col">
            <img
              src={`/plants/${plant.prod_image}`}
              alt=""
              className="h-[261px]"
            />
            <span>
              <a href={`/products/${plant.prod_id}`}>{plant.prod_name}</a>
            </span>
            <span>
              <i>Philodendron</i>
            </span>
            <span className="font-semibold">Rp50.000,00</span>
          </div>
        ))}
      </div>
    </>
  );
}
