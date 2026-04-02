const MainSection = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block pb-2">Daftar Produk</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                            <span className="text-gray-500 font-medium">Gambar Produk {item}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Produk Spesial {item}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">Deskripsi singkat mengenai produk ini yang sangat berkualitas dan terjangkau.</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                            Beli Sekarang
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainSection;
