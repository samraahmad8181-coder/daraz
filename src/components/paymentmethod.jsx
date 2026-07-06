import cashondelivery from "../assets/cashondelivery.png";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import unionpay from "../assets/unionpay.png";
import easypaisa from "../assets/easypaisa.png";
import jazzcash from "../assets/jazzcash.png";
import cod from "../assets/darazwallet.png";
import secure from "../assets/hbl.png";
import pci from "../assets/pci.png";

const PaymentMethod = () => {
    return (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-24">
            {/* Left Section */}
            <div className="flex flex-col gap-4">
                <h1 className="text-xl text-slate-800">Payment Methods</h1>

                <div className="flex flex-wrap gap-6">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-3">
                        <img src={cashondelivery} alt="Cash on Delivery" className="h-8 w-auto" />
                        <img src={visa} alt="Visa" className="h-8 w-auto" />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3">
                        <img src={mastercard} alt="MasterCard" className="h-8 w-auto" />
                        <img src={unionpay} alt="UnionPay" className="h-8 w-auto" />
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-3">
                        <img src={easypaisa} alt="EasyPaisa" className="h-8 w-auto" />
                        <img src={jazzcash} alt="JazzCash" className="h-8 w-auto" />
                    </div>

                    {/* Row of 3 Images */}
                    <div className="flex flex-wrap items-start gap-3">
                        <img src={cod} alt="COD" className="h-8 w-auto" />
                        <img src={secure} alt="Secure" className="h-8 w-auto" />
                        <img src={unionpay} alt="UnionPay" className="h-8 w-auto" />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center justify-center gap-3 lg:self-center">
                <h1 className="text-xl text-slate-800">Verified By</h1>

                <img
                    src={pci}
                    alt="PCI"
                    className="h-14 w-auto"
                />
            </div>
        </div>
    );
};

export default PaymentMethod;