
import NavBar from "../navBar/NavBar"

export default function Header() {
    return (

        <header className="bg-blue-600 py-6 px-8 md:px-12 lg:px-20">
            <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight flex-1 text-left">
                <span className="mr-2">NBA HOME</span>

                <NavBar />
            </div>
        </header>
    )
}