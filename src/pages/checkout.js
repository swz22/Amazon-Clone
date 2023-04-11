import Image from "next/image";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

function Checkout() {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left side */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://images-na.ssl-images-amazon.com/images/G/01/sns/store/2021update/XCM_Manual_1384932_2019054_4294405_US_1500x300_2X_en_US.jpg"
            alt=""
            width={1020}
            height={250}
            objectFit="contain"
            priority="primary"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? "Your Amazon Cart is empty." : "Shopping Cart"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* right side */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
