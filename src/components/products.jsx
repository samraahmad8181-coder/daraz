import React from 'react'
import asset2 from '../assets/airconditioner.png'
import asset3 from '../assets/bat.png'
import asset4 from '../assets/beautifulbags.png'
import asset5 from '../assets/brush.png'
import asset6 from '../assets/collar.png'
import asset7 from '../assets/collarcat.png'

import asset8 from '../assets/cover.png'
import asset9 from '../assets/dispenser.png'
import asset10 from '../assets/dtf.png'
import asset11 from '../assets/foundation.png'
import asset12 from '../assets/fragrance.png'
import asset13 from '../assets/fridgecover.png'

import asset14 from '../assets/fullsleevesnighty.png'
import airconditioner from '../assets/headphones.png'
import bags from '../assets/helicoptor.png'
import bat from '../assets/hijabmagnet.png'
import beautifulbags from '../assets/holder.png'
import boxImage from '../assets/jersey.png'

import brush from '../assets/ladiebag.png'
import casserole from '../assets/ladiesshoe.png'
import clipper from '../assets/laptopcase.png'
import collarcat from '../assets/lawnsuit.png'
import color from '../assets/lens.png'
import cover from '../assets/lipstick.png'

import cream from '../assets/menshoe.png'
import dispenser from '../assets/mentshirt.png'
import donate from '../assets/mini-fan.png'
import dryer from '../assets/mixer.png'
import dtf from '../assets/naqab.png'
import everyday from '../assets/orgnizerbag.png'

import eyeroller from '../assets/pendent.png'
import foundation from '../assets/perfume.png'
import fragrance from '../assets/pool.png'
import fridgecover from '../assets/portable.png'
import fullsleevesnighty from '../assets/rabittoy.png'
import gripper from '../assets/seeds.png'

import hairroller from '../assets/serum.png'
import headphones from '../assets/setshirt.png'
import helicoptor from '../assets/shirt.png'
import hijabmagnet from '../assets/shoeorganizer.png'
import holder from '../assets/sleeve.png'
import jersey from '../assets/softtoy.png'

import keratin from '../assets/suit.png'
import knives from '../assets/wallet.png'
import ladiebag from '../assets/watch.png'
import ladiesbag from '../assets/waterbottles.png'
import ladiesshoe from '../assets/waterduck.png'
import laptopcase from '../assets/wavegloss.png'

const productImages = [
    { image: asset2, title: 'Air Conditioner' },
    { image: asset3, title: 'Bat' },
    { image: asset4, title: 'Beautiful Bags' },
    { image: asset5, title: 'Brush' },
    { image: asset6, title: 'Collar' },
    { image: asset7, title: 'Collar Cat' },
    { image: asset8, title: 'Airpods Cover' },
    { image: asset9, title: 'Dispenser' },
    { image: asset10, title: 'DTF' },
    { image: asset11, title: 'Foundation' },
    { image: asset12, title: 'Fragrance' },
    { image: asset13, title: 'Fridge Cover' },
    { image: asset14, title: 'Full Sleeve Nighty' },
    { image: airconditioner, title: 'Headphones' },
    { image: bags, title: 'Helicoptor' },
    { image: bat, title: 'Hijab Magnet' },
    { image: beautifulbags, title: 'Holder' },
    { image: boxImage, title: 'Jersey' },
    { image: brush, title: 'Ladies Bag' },
    { image: casserole, title: 'Ladies Shoe' },
    { image: clipper, title: 'Laptop Case' },
    { image: collarcat, title: 'Lawn Suit' },
    { image: color, title: 'Lens' },
    { image: cover, title: 'lipstick' },
    { image: cream, title: 'Men Shoe' },
    { image: dispenser, title: 'Men T-Shirt' },
    { image: donate, title: 'Mini Fan' },
    { image: dryer, title: 'Mixer' },
    { image: dtf, title: 'Naqab' },
    { image: everyday, title: 'Organizer Bag' },
    { image: eyeroller, title: 'Pendent' },
    { image: foundation, title: 'Perfume' },
    { image: fragrance, title: 'Pool' },
    { image: fridgecover, title: 'Portable Fan' },
    { image: fullsleevesnighty, title: 'Full Sleeve Nighty' },
    { image: gripper, title: 'Seeds' },
    { image: hairroller, title: 'Serum' },
    { image: headphones, title: 'Set Shirt' },
    { image: helicoptor, title: 'Shirt' },
    { image: hijabmagnet, title: 'Shoe Organizer' },
    { image: holder, title: 'Sleeve' },
    { image: jersey, title: 'Soft Toy' },
    { image: keratin, title: 'Suit' },
    { image: knives, title: 'Wallet' },
    { image: ladiebag, title: 'Watch' },
    { image: ladiesbag, title: 'Water Bottles' },
    { image: ladiesshoe, title: 'Wave Gloss' },
    { image: laptopcase, title: 'Wave Gloss' },
]

const products = productImages.map((item, index) => {
    const original = Math.floor(Math.random() * 9000) + 1000
    const cut = original + Math.floor(Math.random() * 4000) + 500
    const off = Math.round(((cut - original) / cut) * 100)

    return {
        id: index,
        image: item.image,
        title: item.title,
        price: `Rs.${original.toLocaleString()}`,
        cutPrice: `Rs.${cut.toLocaleString()}`,
        off: `-${off}%`,
    }
})

const groups = Array.from({ length: 8 }).map((_, gi) => products.slice(gi * 6, gi * 6 + 6))

export default function Products() {
    return (
        <section className="mx-auto mt-6 max-w-7xl px-3 sm:px-6 lg:px-8">
            <h1 className="text-xl text-slate-600">Just For You</h1>

            <div className="mt-4 rounded-[24px] bg-white p-4 shadow-[0_8px_24px_rgba(107,114,128,0.16)] sm:p-6 lg:p-8">
                {groups.map((group, idx) => (
                    <div key={idx} className="mb-6 last:mb-0">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
                            {group.map((product) => (
                                <div key={product.id} className="overflow-hidden rounded-[18px] border border-slate-100 bg-slate-50 shadow-sm">
                                    <div className="h-40 overflow-hidden bg-slate-100">
                                        <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-sm font-semibold text-slate-800">{product.title}</h3>
                                        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex flex-wrap gap-1">
                                                <span className="text-base font-bold text-orange-500">{product.price}</span>
                                                <span className="px-2 py-0.5 text-xs font-semibold ">{product.off}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-yellow-400">
                                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                            </div>
                                            <span className="text-sm font-semibold text-slate-600">(123)</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <button
                    className="w-full sm:w-80 md:w-96 rounded-md border border-blue-400 bg-white py-3 text-sm font-semibold text-blue-400 transition duration-200 hover:bg-blue-600 hover:text-white"
                >
                    LOAD MORE
                </button>
            </div>
        </section>
    )
}

