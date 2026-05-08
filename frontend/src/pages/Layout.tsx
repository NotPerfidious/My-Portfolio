import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


function Layout() {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-1 flex flex-col pt-12 mt-20 px-15 pb-10">

                    <div className="flex-1 min-h-screen">
                        <Outlet />
                    </div>

                </main>


                <Footer />
            </div>

        </>
    )

}

export default Layout;