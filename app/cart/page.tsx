import HomeLayout from "../layouts/HomeLayout";

export default function Cart() {
  return (
    <HomeLayout>
      <div className="flex justify-center">
        <table className="table-auto border-collapse border border-slate-300 w-full">
          <thead className="border border-slate-300">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Shipping</th>
              <th className="p-3">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-3">
                <div className="flex justify-center">
                  <img src="/plants/baby-campii.avif" alt="" className="w-28" />
                </div>
              </td>
              <td className="p-3">2</td>
              <td className="p-3">Shipping</td>
              <td className="p-3">Rp50.000,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </HomeLayout>
  );
}
