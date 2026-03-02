import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
};

const Kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();

  const [products, setProducts] = useState<ProductType[]>([]);
  const router = useRouter();

  // Contoh redirect jika mau pakai isLogin
  // if (!isLogin) {
  //   router.push("/login");
  // }

  const fetchData = async () => {
    try {
      const response = await fetch("/api/produk");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      setProducts(responseData.data);
      console.log("fetching produk:", responseData.data);
    } catch (error) {
      console.error("Error fetch produk:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6 sm:p-10 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2.5 rounded-xl text-white shadow-lg shadow-indigo-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Katalog Produk
            </h1>
          </div>
          <button
            onClick={fetchData}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700 font-semibold rounded-xl shadow-sm transition-all duration-200 active:scale-95"
          >
            <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            Refresh Data
          </button>
        </div>

        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[400px]">
            <div className="relative flex justify-center items-center mb-6">
              <div className="absolute animate-ping bg-indigo-200 rounded-full h-12 w-12 opacity-50"></div>
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600 relative z-10"></div>
            </div>
            <p className="text-gray-500 font-medium text-lg">Memuat koleksi produk...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out border border-gray-100 flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="flex justify-between items-start mb-5 relative z-10">
                  <span className="px-3.5 py-1.5 bg-indigo-50/80 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full border border-indigo-100 group-hover:bg-indigo-100 transition-colors">
                    {product.category ?? "General"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-red-500 group-hover:bg-red-50 transition-colors duration-300 cursor-pointer">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-indigo-600 transition-colors relative z-10">
                  {product.name}
                </h2>

                <div className="mt-auto pt-4 relative z-10">
                  <div className="flex items-end gap-2 mb-4">
                    <span className="text-sm font-semibold text-gray-500 mb-1">Rp</span>
                    <span className="text-3xl font-black text-gray-900 tracking-tight">
                      {product.price.toLocaleString("id-ID")}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                      <span>Size <strong className="text-gray-900 ml-1">{product.size}</strong></span>
                    </div>
                    <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300">
                      Beli <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kategori;