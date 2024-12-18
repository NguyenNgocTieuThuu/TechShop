import React from "react";
const ProductUpdate = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div class="col-span-1 shadow shadow-sm border border-red-950 rounded-lg">
        <h5 className=" px-8 py-4 font-semibold text-3xl">Hình ảnh sản phẩm</h5>
        <div class="px-8 h-96 overflow-hidden rounded-xl bg-clip-border">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
            alt="card-image"
            class="h-full w-full object-cover rounded-md"
          />
        </div>
        <div class="p-8 flex gap-10">
          <button
            class="rounded-md bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>

          <button
            class="rounded-md bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div class="relative col-span-2 rounded-lg bg-white border border-slate-200 shadow-sm">
        <h5 className=" px-8 py-4 font-semibold text-3xl">
          Thông tin sản phẩm
        </h5>
        <div class="p-8">
          <div class="block overflow-visible">
            <div class="w-full">
              <div class="relative right-0">
                <ul
                  class="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-md bg-slate-100"
                  data-tabs="tabs"
                  role="tablist"
                >
                  <li class="z-30 flex-auto text-center">
                    <a
                      class="z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer text-slate-600 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected="true"
                    >
                      Pay with Card
                    </a>
                  </li>
                  <li class="z-30 flex-auto text-center">
                    <a
                      class="z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-600 bg-inherit"
                      data-tab-target=""
                      role="tab"
                      aria-selected="false"
                    >
                      Pay with PayPal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
              <div role="tabpanel" data-value="card">
                <form class="mt-8 flex flex-col">
                  <div class="w-full max-w-sm min-w-[200px]">
                    <label class="block mb-2 text-sm text-slate-600">
                      Email
                    </label>
                    <input
                      type="email"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="Your Email"
                    />
                  </div>

                  <label class="block mb-1 text-sm text-slate-600 mt-4">
                    Card Details
                  </label>
                  <input
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="1234 5678 9012 3456"
                  />

                  <div class="flex">
                    <div class="w-full md:w-8/12 mr-4">
                      <label class="block mb-1 text-sm text-slate-600 mt-4">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div class="w-full md:w-4/12">
                      <label class="block mb-1 text-sm text-slate-600 mt-4">
                        CVV
                      </label>
                      <input
                        type="text"
                        class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <label class="mt-4 block mb-1 text-sm text-slate-600">
                    Holder Name
                  </label>
                  <input
                    type="text"
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="e.g John Doe"
                  />

                  <button class="w-full mt-6 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Pay Now
                  </button>
                  <p class="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 font-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="-mt-0.5 h-4 w-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Payments are secure and encrypted
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductUpdate;
