import Header from "../components/Header";
import Image from "next/image";

function checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left side */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://pbs.twimg.com/media/EzgnjHYXsAg0a-S?format=png&name=900x900"
            alt=""
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
          </div>
        </div>
        {/* right side */}
        <div></div>
      </main>
    </div>
  );
}

export default checkout;
