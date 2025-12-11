import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChristmasPromo from "@/components/ChristmasPromo";

const ChristmasPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <ChristmasPromo />
            </main>
            <Footer />
        </div>
    );
};

export default ChristmasPage;
