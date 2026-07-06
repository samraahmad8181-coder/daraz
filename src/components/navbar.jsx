import logo from '../assets/logo.png'
import { Search, ShoppingCart } from 'lucide-react'

function Navbar() {
    return (
        <header className="bg-[linear-gradient(90deg,#ff6b00_0%,#ff8c00_100%)] px-3 py-3 text-white shadow-[0_8px_24px_rgba(255,107,0,0.18)] sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 text-[11px] font-medium uppercase tracking-wide opacity-95 sm:gap-8 sm:text-xs">
                <a href="#" className="transition hover:text-orange-50">
                    SAVE MORE ON APP
                </a>
                <a href="#" className="transition hover:text-orange-50">
                    SELL ON DARAZ
                </a>
                <a href="#" className="transition hover:text-orange-50">
                    HELP & SUPPORT
                </a>
                <a href="#" className="transition hover:text-orange-50">
                    LOGIN
                </a>
                <a href="#" className="transition hover:text-orange-50">
                    SIGN UP
                </a>
            </div>

            <div className="mx-auto mt-3 flex max-w-7xl items-center gap-2 sm:gap-3">
                <a href="#" className="flex shrink-0 items-center">
                    <img src={logo} alt="Daraz" className="h-8 w-auto object-contain sm:h-10" />
                </a>

                <div className="flex flex-1 justify-center">
                    <label
                        className="flex w-full max-w-2xl items-center overflow-hidden rounded-full bg-white px-2 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.12)] sm:px-3"
                        htmlFor="search"
                    >
                        <input
                            id="search"
                            type="text"
                            placeholder="Search in Daraz"
                            className="w-full border-0 bg-transparent px-2 py-1 text-sm text-slate-700 outline-none sm:px-3"
                        />
                        <button
                            type="button"
                            aria-label="Search"
                            className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d9480f] transition hover:bg-[#c23d0c] sm:h-10 sm:w-10"
                        >
                            <Search className="h-4 w-4 text-white" />
                        </button>
                    </label>
                </div>

                <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center"
                    aria-label="Cart"
                >
                    <ShoppingCart className="h-7 w-7" />
                </a>
            </div>
        </header>
    )
}

export default Navbar
