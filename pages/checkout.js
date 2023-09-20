
import CheckoutContent from "@/app/components/checkout/CheckoutContent";

import Breadcrumb from "@/app/components/shared/Breadcrumb";

const checkout = () => {

 
  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-[#F5F5F5] py-5">
        <div className="mx-auto max-w-5xl ">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Checkout" }]}
          />
        </div>
      </div>
      <div className="p-5">
        <div className="mx-auto max-w-5xl mt-10">
          <h1 className="text-4xl text-center text-title font-bold mb-10">
            Checkout
          </h1>
         <CheckoutContent/>
        </div>
      </div>
    </main>
  );
};

export default checkout;
