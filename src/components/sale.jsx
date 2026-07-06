import { Link } from 'react-router-dom'
import product1 from '../assets/keratin.png'
import product2 from '../assets/hair-roller.png'
import product3 from '../assets/eye-roller.png'
import product4 from '../assets/lice.png'
import product5 from '../assets/tds-meter.png'
import product6 from '../assets/cream.png'

const products = [
    {
        title: 'Straightening Keratin Hair Treatment',
        price: 'Rs.2,999',
        cutPrice: 'Rs.4,999',
        off: '-40%',
        image: product1,
    },
    {
        title: 'Darma Roller with 540 needle',
        price: 'Rs.4,999',
        cutPrice: 'Rs.7,999',
        off: '-38%',
        image: product2,
    },
    {
        title: 'DIY Eyelash Extension Kit',
        price: 'Rs.3,499',
        cutPrice: 'Rs.5,999',
        off: '-42%',
        image: product3,
    },
    {
        title: 'Stainless Steel Lice Comb',
        price: 'Rs.1,999',
        cutPrice: 'Rs.3,499',
        off: '-43%',
        image: product4,
    },
    {
        title: 'TDS Meter Water Quality Tester',
        price: 'Rs.2,499',
        cutPrice: 'Rs.3,999',
        off: '-38%',
        image: product5,
    },
    {
        title: 'Loyi Salicylic Acid Cream 20% 30g',
        price: 'Rs.899',
        cutPrice: 'Rs.1,499',
        off: '-40%',
        image: product6,
    },
]

function Sale() {
    return (
        <section className="mx-auto mt-6 max-w-7xl px-3 sm:px-6 lg:px-8">
            <h1 className="text-xl text-slate-600">Flash Sale</h1>
            <div className="rounded-3xl bg-white p-4 shadow-[0_8px_24px_rgba(107,114,128,0.16)] sm:p-6 lg:p-8">

                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-sm text-orange-500">On Sale Now</p>
                    </div>
                    <button className="rounded-full  px-4 py-2 text-sm font-semibold text-orange-500 border-amber-600 transition hover:bg-orange-600">
                        Shop All Products
                    </button>
                </div>

                <div className="flex flex-wrap gap-3">
                    {products.map((product) => (
                        <div key={product.title} className="w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.75rem)] xl:w-[calc(25%-0.75rem)] 2xl:w-[calc(16.666%-0.75rem)]">
                            <div className="h-36 overflow-hidden rounded-t-2xl bg-slate-100">
                                {product.title === 'Straightening Keratin Hair Treatment' ? (
                                    <Link to="/Detail">
                                        <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                                    </Link>
                                ) : (
                                    <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                                )}
                            </div>
                            <div className="p-2.5">
                                <h3 className="text-sm font-semibold text-slate-800 line-clamp-2">{product.title}</h3>
                                <div className="mt-2 flex flex-col gap-1">
                                    <span className="text-sm font-bold text-orange-500">{product.price}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-slate-400 line-through">{product.cutPrice}</span>
                                        <span className="rounded-full bg-orange-100 px-2 py-1 text-[11px] font-semibold text-orange-600">
                                            {product.off}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Sale
