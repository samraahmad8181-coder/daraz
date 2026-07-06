import React from 'react'
import bags from '../assets/bags.png'
import gripper from '../assets/gripper.png'
import printer from '../assets/printer.png'
import dryer from '../assets/dryer.png'
import casserole from '../assets/casserole.png'
import clipper from '../assets/clipper.png'
import color from '../assets/color.png'
import donate from '../assets/donate.png'
import everyday from '../assets/everyday.png'
import knives from '../assets/knives.png'
import leashes from '../assets/leashes.png'
import others from '../assets/others.png'
import pepper from '../assets/pepper.png'
import protector from '../assets/protector.png'
import sets from '../assets/sets.png'


const assets = [
    { src: bags, title: 'Bags' },
    { src: gripper, title: 'Gripper' },
    { src: printer, title: 'Printer' },
    { src: dryer, title: 'Air Dryer' },
    { src: casserole, title: 'Casserole' },
    { src: clipper, title: 'Clipper' },
    { src: color, title: 'Color' },
    { src: donate, title: 'Donate' },
    { src: everyday, title: 'Everyday' },
    { src: knives, title: 'Knives' },
    { src: leashes, title: 'Leashes' },
    { src: others, title: 'Others' },
    { src: pepper, title: 'Pepper' },
    { src: printer, title: 'Printer' },
    { src: protector, title: 'Protector' },
    { src: sets, title: 'Sets' },
]

const items = Array.from({ length: 16 }).map((_, i) => {
    const a = assets[i % assets.length]
    return { ...a, id: i }
})

export default function Categories() {
    return (
        <section className="mx-auto mt-6 max-w-7xl px-3 sm:px-6 lg:px-8">
            <h1 className="text-xl text-slate-600">Categories</h1>

            <div className="rounded-[24px] bg-white p-4 shadow-[0_8px_24px_rgba(107,114,128,0.16)] sm:p-6 lg:p-8 mt-4">
                <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-8">
                    {items.slice(0, 8).map((it) => (
                        <div key={it.id} className="rounded-[18px] border border-slate-100 bg-slate-50 p-3 shadow-sm text-center">
                            <div className="h-40 overflow-hidden bg-slate-100">
                                <img src={it.src} alt={it.title} className="h-20 w-full object-cover" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-800">{it.title}</h3>
                        </div>
                    ))}
                </div>

                {/* <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-8">
                    {items.slice(8, 16).map((it) => (
                        <div key={it.id} className="rounded-[18px] border border-slate-100 bg-slate-50 p-3 shadow-sm text-center">
                            <div className="mb-3 flex items-center justify-center overflow-hidden rounded-[14px] bg-slate-100">
                                <img src={it.src} alt={it.title} className="h-20 w-full object-contain" />
                            </div>
                            <h3 className="text-sm font-semibold text-slate-800">{it.title}</h3>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    )
}

