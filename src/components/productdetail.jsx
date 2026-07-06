import { useState } from 'react'
import keratin from '../assets/keratin.png'
import darazlogo from '../assets/darazlogo.png'
import scan from '../assets/scan.png'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from './ui/alert-dialog'
import {
    Info,
    MapPin,
    Truck,
    Zap,
    Wallet,
    RotateCcw,
    ShieldOff,
    MessageCircle,
} from 'lucide-react'

export default function ProductDetail() {
    const [quantity, setQuantity] = useState(1)

    const [addressIndex, setAddressIndex] = useState(0)

    const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false)

    const [selectedProvince, setSelectedProvince] = useState('Punjab')

    const [selectedCity, setSelectedCity] = useState('Lahore')

    const [selectedColony, setSelectedColony] = useState('Gulberg')

    const increment = () => setQuantity((prev) => prev + 1)
    const decrement = () => setQuantity((prev) => Math.max(1, prev - 1))

    const addresses = [

        {
            label: 'Home Address',
            province: 'Punjab',
            city: 'Lahore',
            colony: 'Gulberg',
            detail: 'House 12, Gulberg III, Lahore',
            note: 'Delivered between 9 AM - 8 PM',
        },

        {
            label: 'Office Address',
            province: 'Islamabad Capital Territory',
            city: 'Islamabad',
            colony: 'Blue Area',
            detail: 'Suite 5, Blue Area',
            note: 'Delivered between 9 AM - 6 PM',
        },

        {
            label: 'Pickup Point',
            province: 'Punjab',
            city: 'Rawalpindi',
            colony: 'Saddar',
            detail: 'Main Market Saddar',
            note: 'Pickup Available',
        },

    ]
    const provinceOptions = [

        'Punjab',

        'Sindh',

        'Khyber Pakhtunkhwa',

        'Islamabad Capital Territory',

    ]
    const cityOptions = {

        Punjab: [

            'Lahore',

            'Rawalpindi',

            'Faisalabad',

        ],

        Sindh: [

            'Karachi',

            'Hyderabad',

        ],

        'Khyber Pakhtunkhwa': [

            'Peshawar',

            'Mardan',

        ],

        'Islamabad Capital Territory': [

            'Islamabad',

        ],

    }
    const colonyOptions = {

        Lahore: [

            'Gulberg',

            'Johar Town',

            'Model Town',

        ],

        Rawalpindi: [

            'Saddar',

            'Westridge',

        ],

        Faisalabad: [

            'D Ground',

        ],

        Karachi: [

            'Clifton',

            'Defence',

        ],

        Hyderabad: [

            'Latifabad',

        ],

        Peshawar: [

            'Hayatabad',

        ],

        Mardan: [

            'Takht Bhai',

        ],

        Islamabad: [

            'Blue Area',

            'F-7',

        ],

    }

    const currentAddress = {
        label: "Selected Address",
        detail: `${selectedColony}, ${selectedCity}, ${selectedProvince}, Pakistan`,
        note: "Delivery available to this location",
    }
    const openAddressDialog = () => {

        const address = addresses[addressIndex]

        setSelectedProvince(address.province)

        setSelectedCity(address.city)

        setSelectedColony(address.colony)

        setIsAddressDialogOpen(true)

    }
    const confirmAddress = () => {
        setIsAddressDialogOpen(false)
    }

    const deliveryItems = [
        {
            icon: <MapPin size={18} className="mt-0.5 text-slate-600" />,
            title: 'Location',
            action: 'CHANGE',
            compact: true,
        },
        {
            icon: <Truck size={18} className="mt-0.5 text-slate-600" />,
            title: 'Standard Delivery',
            meta: 'Guranted by 9-11 Jul',
            price: 'Rs.120',
        },
        {
            icon: <Zap size={18} className="mt-0.5 text-slate-600" />,
            title: 'Express Delivery',
            meta: 'Guranted by 9-11 Jul',
            price: 'Rs.220',
        },
        {
            icon: <Wallet size={18} className="mt-0.5 text-slate-600" />,
            title: 'Cash on Delivery Available',
        },
    ]

    const serviceItems = [
        {
            icon: <RotateCcw size={18} className="mt-0.5 text-slate-600" />,
            title: '14 Days Easy Return',
        },
        {
            icon: <ShieldOff size={18} className="mt-0.5 text-slate-600" />,
            title: 'Warranty not available',
        },
    ]

    return (
        <section className="mx-auto mt-6 max-w-7xl px-3 sm:px-6 lg:px-8">
            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.45fr]">
                <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                    <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
                        <div className="flex items-center justify-center bg-slate-50 p-6">
                            <img
                                src={keratin}
                                alt="Keratin Hair Treatment"
                                className="h-[320px] w-full max-w-md rounded-[24px] object-cover shadow-sm sm:h-[380px]"
                            />
                        </div>

                        <div className="p-6 sm:p-8">
                            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                                Straighten and Revitalize: Discover the Ultimate Keratin Hair Mask Treatment for Silken, Healthy Locks-500ml
                            </h1>

                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
                                    {Array(5).fill('★').map((star, index) => (
                                        <span key={index}>{star}</span>
                                    ))}
                                </div>
                                <span className="text-sm font-semibold text-slate-700">(98)</span>
                            </div>

                            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                                <span className="font-medium text-blue-700">Brand: Keratin</span>
                                <span className="text-slate-400">|</span>
                                <span className="font-medium text-blue-700">More Hair Care from Keratin</span>
                            </div>

                            <div className="mt-6 flex items-end gap-3">
                                <p className="text-3xl font-bold text-orange-500">Rs.3,499</p>
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                                <span className="text-slate-500 line-through">Rs. 5,790</span>
                                <span className="rounded-full bg-orange-100 px-2.5 py-1 font-semibold text-orange-600">-40%</span>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <span className="font-semibold text-slate-800">Quantity</span>
                                <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-2">
                                    <button
                                        type="button"
                                        onClick={decrement}
                                        className="h-10 w-10 rounded-full text-xl font-bold text-slate-700 transition hover:bg-slate-200"
                                    >
                                        −
                                    </button>
                                    <span className="mx-3 min-w-[2rem] text-center text-lg font-semibold text-slate-900">{quantity}</span>
                                    <button
                                        type="button"
                                        onClick={increment}
                                        className="h-10 w-10 rounded-full text-xl font-bold text-slate-700 transition hover:bg-slate-200"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <button className="inline-flex min-w-[180px] items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                                    Add To Cart
                                </button>
                                <button className="inline-flex min-w-[180px] items-center justify-center rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="rounded-2xl bg-slate-50 p-5 shadow-sm">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center justify-between">
                                <p className="text-lg font-sm text-gray-500">Delivery Options</p>
                                <div className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-slate-600">
                                    <Info size={12} />
                                </div>
                            </div>

                            {deliveryItems.map((item, index) => (
                                <div key={index} className={`flex ${item.compact ? 'items-start justify-between gap-3' : 'gap-3'}`}>
                                    <div className="flex gap-3">
                                        <div className="mt-0.5">{item.icon}</div>
                                        {item.compact ? (
                                            <div className="min-w-0">
                                                <p className="font-medium text-slate-800">{item.title}</p>
                                                {item.title === 'Location' && (
                                                    <div className="mt-1 space-y-1">
                                                        <p className="text-sm font-semibold text-slate-700">
                                                            {selectedColony}
                                                        </p>

                                                        <p className="text-sm text-slate-500">
                                                            {selectedCity}, {selectedProvince}, Pakistan
                                                        </p>

                                                        <p className="text-xs font-medium text-blue-600">
                                                            Delivery Available
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div>
                                                <h4>{item.title}</h4>
                                                {item.meta && <p className="text-sm text-slate-500">{item.meta}</p>}
                                                {item.price && <p className="text-sm font-semibold text-slate-800">{item.price}</p>}
                                            </div>
                                        )}
                                    </div>
                                    {item.action && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={openAddressDialog}
                                                className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
                                            >
                                                CHANGE
                                            </button>

                                            <AlertDialog
                                                open={isAddressDialogOpen}
                                                onOpenChange={setIsAddressDialogOpen}
                                            >
                                                <AlertDialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">

                                                    <AlertDialogHeader>

                                                        <AlertDialogTitle>
                                                            Change Delivery Address
                                                        </AlertDialogTitle>

                                                        <AlertDialogDescription>
                                                            Choose your province, city and colony.
                                                        </AlertDialogDescription>

                                                    </AlertDialogHeader>

                                                    {/* Google Map */}

                                                    <div className="overflow-hidden rounded-xl border">

                                                        <iframe
                                                            title="Google Map"
                                                            width="100%"
                                                            height="250"
                                                            loading="lazy"
                                                            className="rounded-xl"
                                                            src={`https://maps.google.com/maps?q=${selectedColony},${selectedCity},${selectedProvince},Pakistan&z=14&output=embed`}
                                                        />

                                                    </div>

                                                    {/* Province */}

                                                    <div>

                                                        <label className="mb-2 block font-semibold">

                                                            Province

                                                        </label>

                                                        <select
                                                            className="w-full rounded-lg border p-3"
                                                            value={selectedProvince}
                                                            onChange={(e) => {

                                                                const province = e.target.value

                                                                setSelectedProvince(province)

                                                                const firstCity = cityOptions[province][0]

                                                                setSelectedCity(firstCity)

                                                                setSelectedColony(
                                                                    colonyOptions[firstCity][0]
                                                                )

                                                            }}
                                                        >

                                                            {provinceOptions.map((province) => (

                                                                <option
                                                                    key={province}
                                                                    value={province}
                                                                >
                                                                    {province}
                                                                </option>

                                                            ))}

                                                        </select>

                                                    </div>

                                                    {/* City */}

                                                    <div>

                                                        <label className="mb-2 block font-semibold">

                                                            City

                                                        </label>

                                                        <select
                                                            className="w-full rounded-lg border p-3"
                                                            value={selectedCity}
                                                            onChange={(e) => {

                                                                const city = e.target.value

                                                                setSelectedCity(city)

                                                                setSelectedColony(
                                                                    colonyOptions[city][0]
                                                                )

                                                            }}
                                                        >

                                                            {cityOptions[selectedProvince].map((city) => (

                                                                <option
                                                                    key={city}
                                                                    value={city}
                                                                >
                                                                    {city}
                                                                </option>

                                                            ))}

                                                        </select>

                                                    </div>

                                                    {/* Colony */}

                                                    <div>

                                                        <label className="mb-2 block font-semibold">

                                                            Colony

                                                        </label>

                                                        <select
                                                            className="w-full rounded-lg border p-3"
                                                            value={selectedColony}
                                                            onChange={(e) =>
                                                                setSelectedColony(e.target.value)
                                                            }
                                                        >

                                                            {colonyOptions[selectedCity].map((colony) => (

                                                                <option
                                                                    key={colony}
                                                                    value={colony}
                                                                >
                                                                    {colony}
                                                                </option>

                                                            ))}

                                                        </select>

                                                    </div>

                                                    <AlertDialogFooter className="sticky bottom-0 bg-white">

                                                        <AlertDialogCancel>

                                                            Cancel

                                                        </AlertDialogCancel>

                                                        <AlertDialogAction
                                                            onClick={confirmAddress}
                                                        >
                                                            Confirm Address
                                                        </AlertDialogAction>

                                                    </AlertDialogFooter>

                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </>
                                    )}
                                </div>
                            ))}

                            <div className="flex items-center justify-between border-t border-slate-200 pt-3">
                                <p className="text-gray-600 text-sm">Return & Warranty</p>
                                <div className="flex h-8 w-8 items-center justify-center text-sm font-semibold">
                                    <Info size={16} />
                                </div>
                            </div>

                            {serviceItems.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <div className="mt-0.5">{item.icon}</div>
                                    <h4>{item.title}</h4>
                                </div>
                            ))}

                            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                                <img src={scan} alt="Scan QR code" className="h-16 w-16 object-contain" />
                                <div className="flex flex-col">
                                    <img src={darazlogo} alt="Daraz logo" className="w-20" />
                                    <h4 className="mt-1 text-sm text-gray-400">Download app to enjoy exclusive discounts!</h4>
                                </div>
                            </div>

                            <label className="flex items-center gap-3">
                                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <span className="text-sm font-medium text-slate-700">Scan with me</span>
                            </label>
                        </div>
                    </div>

                    {/* right div */}
                    <div className="rounded-2xl bg-slate-50 p-5 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <p className="text-sm text-slate-500">Sold by</p>
                                <h4 className="mt-1 text-base font-semibold text-slate-800">Virk Mall</h4>
                            </div>
                            <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-50">
                                <MessageCircle size={16} />
                                <span>Chat Now</span>
                            </button>
                        </div>

                        <div className="mt-5 grid gap-4 sm:grid-cols-3">
                            <div>
                                <p className="text-lg font-semibold text-slate-800">90%</p>
                                <p className="text-sm text-slate-500">Positive Seller Rating</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-slate-800">100%</p>
                                <p className="text-sm text-slate-500">Ship on Time</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-slate-800">5 Yrs</p>
                                <p className="text-sm text-slate-500">Joined</p>
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
                            <div className="text-center">
                                <span className="block text-lg font-semibold text-slate-800">4.9</span>
                                <h4 className="text-sm text-slate-500">Rating</h4>
                            </div>
                            <div className="text-center">
                                <span className="block text-lg font-semibold text-slate-800">10k+</span>
                                <h4 className="text-sm text-slate-500">Followers</h4>
                            </div>
                        </div>

                        <div className="mt-5 flex justify-center">
                            <button className="px-8 py-2 font-medium text-blue-600 transition hover:bg-blue-50">
                                GO TO STORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
