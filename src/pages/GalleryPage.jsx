import defaultImg from "../assets/test.png";
import defaultImg2 from "../assets/test2.jpg";

function GalleryPage() {
  return (
    <div className="container mx-auto">
      <section className="py-10 px-4 md:px-8 lg:px-16 flex flex-col gap-3 sm:gap-4 md:gap-5">
        {/* ROW PERTAMA + FLOATING */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5">
          {/* KIRI */}
          <div className="lg:w-5/6">
            <h1 className="text-5xl font-semibold">Gallery</h1>
            <h1 className="text-md mt-3 mb-8 text-gray-500 max-w-[45rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              earum, fugit facere illo, corrupti iste, aliquam hic totam ab
              itaque consectetur. Hic aliquam doloremque qui.
            </h1>

            {/* img1 */}
            <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-[20rem] md:h-[28rem] mt-5 w-full">
              <img
                alt="..."
                src={defaultImg}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
                <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
                  <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h3>
                  {/* line-clamp-3 */}
                  <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ut consequuntur rerum aut unde aspernatur accusamus
                    assumenda possimus quod nemo, id, sint dolore itaque sed
                    earum, maxime sapiente ab numquam?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN */}
          {/* flex-col md:flex-row */}
          <div className="flex gap-3 sm:gap-4 md:gap-5 lg:block lg:w-2/6 relative lg:-me-20">
            <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 lg:h-96 lg:mt-5 w-full md:w-1/2 lg:w-5/6">
              <img
                alt="..."
                src={defaultImg}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
                <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
                  <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h3>
                  {/* line-clamp-3 */}
                  <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ut consequuntur rerum aut unde aspernatur accusamus
                    assumenda possimus quod nemo, id, sint dolore itaque sed
                    earum, maxime sapiente ab numquam?
                  </p>
                </div>
              </div>
            </div>

            {/* FLOATING */}
            <div className="relative lg:absolute z-10 overflow-hidden rounded-2xl shadow transition hover:shadow-lg h-64 w-full md:w-1/2 lg:w-full lg:mt-5">
              <img
                alt="..."
                src={defaultImg2}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
                <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
                  <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h3>
                  {/* line-clamp-3 */}
                  <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    ut consequuntur rerum aut unde aspernatur accusamus
                    assumenda possimus quod nemo, id, sint dolore itaque sed
                    earum, maxime sapiente ab numquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW KEDUA */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:-ms-20 relative">
          <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg aspect-video md:h-96 w-full lg:w-1/4">
            <img
              alt="..."
              src={defaultImg2}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-900/25 h-full w-full">
              <div className="absolute p-4 sm:p-6 bottom-0 lg:bottom-auto lg:top-0 lg:right-0 w-2/3 lg:text-right">
                <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h3>
                {/* line-clamp-3 */}
                <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  ut consequuntur rerum aut unde aspernatur accusamus assumenda
                  possimus quod nemo, id, sint dolore itaque sed earum, maxime
                  sapiente ab numquam?
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow transition hover:shadow-lg aspect-video md:h-96 lg:h-[32rem] w-full lg:w-4/6">
            <img
              alt="..."
              src={defaultImg}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full w-full">
              <div className="absolute p-4 sm:p-6 bottom-0 w-2/3">
                <h3 className="mt-0.5 text-lg font-semibold text-white line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur.
                </h3>
                {/* line-clamp-3 */}
                <p className="mt-2 text-sm/relaxed text-white/95 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  ut consequuntur rerum aut unde aspernatur accusamus assumenda
                  possimus quod nemo, id, sint dolore itaque sed earum, maxime
                  sapiente ab numquam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event 1 */}
      <section className="py-10 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl font-semibold">Event #1</h1>
        <h1 className="text-gray-500 pt-4 pb-3">
          The education of even a small child, therefore, does not.
        </h1>
        {/* Row */}
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* First Image */}
            <div className="overflow-hidden rounded-2xl my-3 lg:px-3 lg:-ml-40 lg:h-[20rem]">
              <img
                src={defaultImg2}
                alt=""
                className="object-cover object-center h-full w-full rounded-2xl"
              />
            </div>
            {/* Second Image */}
            <div className="overflow-hidden rounded-2xl my-3 lg:px-3 lg:w-[90rem] lg:h-[30rem]">
              <img
                src={defaultImg}
                alt=""
                className="object-cover object-center h-full w-full rounded-2xl"
              />
            </div>
            {/* Thrid Image */}
            <div className="overflow-hidden rounded-2xl my-3 lg:px-3 lg:-mr-64 lg:h-[25rem]">
              <img
                src={defaultImg2}
                alt=""
                className="object-cover object-center h-full w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event 2 */}
      <section className="py-10 px-4 md:px-8 lg:px-16">
        <div className="flex lg:justify-end">
          <h1 className="text-4xl font-semibold">Event #2</h1>
        </div>
        <div className="flex lg:justify-end">
          <h1 className="text-gray-500 pt-4 pb-3">
            The education of even a small child, therefore, does not.
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div>
            <div className="overflow-hidden rounded-2xl my-3 lg:px-3 lg:-ml-[29rem] lg:h-[25rem]">
              <img
                src={defaultImg2}
                alt=""
                className="object-cover object-center h-full w-full rounded-2xl"
              />
            </div>
            <div className="overflow-hidden rounded-2xl my-3 lg:px-3 lg:-ml-[29rem] lg:h-[25rem]">
              <img
                src={defaultImg2}
                alt=""
                className="object-cover object-center h-full w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Middle Section */}
          <div className="overflow-hidden rounded-2xl my-3 lg:px-3 lg:w-[65rem] lg:h-[51rem]">
            <img
              src={defaultImg}
              alt=""
              className="object-cover object-center h-full w-full rounded-2xl"
            />
          </div>

          {/* Right Section */}
          <div>
            <div className="overflow-hidden rounded-2xl my-3 lg:px-3 lg:-mr-[29rem] lg:h-[25rem]">
              <img
                src={defaultImg2}
                alt=""
                className="object-cover object-center h-full w-full rounded-2xl"
              />
            </div>
            <div className="overflow-hidden rounded-2xl my-3 lg:px-3 lg:-mr-[29rem] lg:h-[25rem]">
              <img
                src={defaultImg2}
                alt=""
                className="object-cover object-center h-full w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
