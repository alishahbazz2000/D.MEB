import {FloatingNav} from "./components/ui/FloatingNavbar.tsx";
import Hero from "./components/Hero.tsx";
import RecentProjects from "./components/RecentProjects.tsx";
import Experience from "./components/Experience.tsx";
import Approach from "./components/Approach.tsx";
import Footer from "./components/Footer.tsx";
import {navItems} from "./data/index.ts";
import DateClass from "./components/DateClass.tsx";
import About from "./components/About.tsx";
import Channel from "./components/Channel.tsx";
import Contact from "./components/ContactUS.tsx";
function App() {
    return (
        <main
            className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems}/>
                <Hero />
                <DateClass />
                <About />
                <Approach/>
                <RecentProjects/>
                <Experience/>
                <Channel />
                <Contact />
                <Footer/>
            </div>
        </main>
    )
}

export default App
