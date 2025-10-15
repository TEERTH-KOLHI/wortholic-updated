import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[100px]">
        {/* <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-4">
                <ul className="flex items-center">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="text-body-color hover:text-primary pr-1 text-sm font-medium"
                    >
                      Home
                    </Link>
                    <span className="border-body-color mx-2 block h-1 w-1 rotate-45 border-t border-r"></span>
                  </li>
                  <li className="text-primary text-sm font-medium">
                    {pageName}
                  </li>
                </ul>
              </div>
              <div className="max-w-[570px]">
                <h1 className="mb-5 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                  {pageName}
                </h1>
                <p className="text-body-color text-base leading-relaxed font-medium">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Breadcrumb;
