import darazlogo from '../assets/darazlogo.png'
import appstore from '../assets/appstore.png'
import appgallery from '../assets/appgallery.png'
import googleplay from '../assets/googleplay.png'

const col1 = [
    'About Us',
    'Careers',
    'Press',
    'Blog',
    'Privacy Policy',
    'Terms of Service',
    'Seller Center',
    'Affiliate',
]

const col2 = [
    'Help Center',
    'How to Buy',
    'How to Sell',
    'Shipping',
    'Returns',
    'Track Order',
    'Payment Options',
    'Coupons',
    'Gift Cards',
    'Warranty',
    'Size Guide',
    'Product Safety',
    'Contact Us',
    'Report Abuse',
]

export default function Footer() {
    return (
        <footer className="mt-12 bg-white border-t border-slate-100">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5">
                    <div>
                        <h4 className="mb-2 text-sm font-semibold text-blue-800">Company</h4>
                        <ul className="text-sm text-blue-800">
                            {col1.map((item) => (
                                <li key={item} className="hover:text-blue-700">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-2 text-sm font-semibold text-blue-800">Support</h4>
                        <ul className="flex flex-col text-sm text-blue-800">
                            {col2.map((item) => (
                                <li key={item} className="hover:text-blue-700">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-start gap-2">
                        <img src={darazlogo} alt="Daraz" className="h-12 w-auto" />
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-orange-500">Happy Shopping</h4>
                            <p className="mt-2 text-sm text-blue-800">Download App</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-2">
                        {/* Left column */}
                        <div className="flex flex-col gap-2">
                            <img src={appstore} alt="App Store" className="h-10 w-auto" />
                            <img src={appgallery} alt="App Gallery" className="h-10 w-auto" />
                        </div>

                        {/* Right side */}
                        <div>
                            <img src={googleplay} alt="Google Play" className="h-10 w-auto" />
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}
