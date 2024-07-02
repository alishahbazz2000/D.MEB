import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="relative font-iranSans">
            <div
                className=" w-full bg-black-100 bg-grid-white/[0.03] absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout