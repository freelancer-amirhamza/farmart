
import { FormBtn } from "../shared/form"

const YourOrder = ({}) => {

    const placeOrder = async (values) => {
        setLoading(true)
    }

  return (
    <div>
        <h3 className="text-2xl mb-4">Your Order</h3>
        <div className="bg-gray-100 p-5 rounded-md">
        <div className="flex justify-between pb-5 border-b ">
            <h2 className="text-base font-bold">PRODUCT</h2>
            <h2 className="text-base font-bold">TOTAL</h2>
        </div>
        <div className=" border-b space-y-3 bg-white ">
        <div className="flex justify-between py-5 px-5 border-b  ">
            <h2 className="text-base font-bold">
                Soft MOchi Galeto Ice Cream <span className="text-color text-sm">(x2)</span>
            </h2>
            <h2 className="text-base font-bold ml-2">$41.00</h2>
        </div>
        <div className="flex justify-between py-5 px-5 border-b  ">
            <h2 className="text-base font-bold">
                Soft MOchi Galoot Ice Cream <span className="text-color text-sm">(x2)</span>
            </h2>
            <h2 className="text-base font-bold ml-2">$10.50</h2>
        </div>
        <div className="flex justify-between py-5 px-5 border-b  ">
            <h2 className="text-base font-bold">
                Soft MOchi Galeto Ice Cream <span className="text-color text-sm">(x2)</span>
            </h2>
            <h2 className="text-base font-bold ml-2">$6.90</h2>
        </div>
        </div>
        <div className="flex justify-between py-5 border-b">
            <h2 className="text-base font-bold">Subtotal</h2>
            <h2 className="text-base font-bold text-green">$59.30</h2>
        </div>
        <div className="py-5 border-b space-y-3 ">
            <span className="text-title">Shipping</span>
            <ul className="">
                <li>- Flat rate</li>
            </ul>
            <p>Shipping to <strong>BD</strong></p>
        </div>
        <div className="flex justify-between py-5 border-b">
            <h2 className="text-lg font-bold">Total</h2>
            <h2 className="text-lg font-bold text-green">$59.30</h2>
        </div>
        <div className="pt-5 border-b">
            <h2 className="text-lg font-bold">Payment Method</h2>
            <h2 className="mt-3 text-gray-500">Pay with a Credit/Debit Card</h2>
        </div>
        </div>
        <FormBtn
           title='Place Order'
           onClick={placeOrder}
                      />
    </div>
  )
}

export default YourOrder