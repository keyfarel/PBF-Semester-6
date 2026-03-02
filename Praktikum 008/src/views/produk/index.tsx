import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

const ProductView = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
            <div className="max-w-6xl mx-auto">
                <HeroSection />
                <MainSection />
            </div>
        </div>
    );
};

export default ProductView;
