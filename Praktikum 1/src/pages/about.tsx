export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20 transform transition-all hover:scale-105 duration-300">
                <div className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">About Me</h1>
                    <p className="text-gray-300 text-sm mb-8 uppercase tracking-widest">Mahasiswa D4 Teknik Informatika</p>

                    <div className="space-y-4 text-left">
                        <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:bg-black/30 transition-colors">
                            <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Nama Mahasiswa</p>
                            <p className="text-white font-medium text-lg">Key Firdausi Alfarel</p>
                        </div>

                        <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:bg-black/30 transition-colors">
                            <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">NIM</p>
                            <p className="text-white font-medium text-lg">2341720186</p>
                        </div>

                        <div className="bg-black/20 p-4 rounded-xl border border-white/5 hover:bg-black/30 transition-colors">
                            <p className="text-gray-400 text-xs uppercase font-bold tracking-wider mb-1">Program Studi</p>
                            <p className="text-white font-medium text-lg">D4 - Teknik Informatika</p>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-4 bg-black/20 border-t border-white/10 flex justify-center">
                    <span className="text-blue-400 text-xs font-semibold tracking-wider">PRAKTIKUM 1 - PBF</span>
                </div>
            </div>
        </div>
    );
}

