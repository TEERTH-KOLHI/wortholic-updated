import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  10 amazing sites to download stock photos & digital assets for
                  free
                </h2>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src="/images/blog/author-02.png"
                            alt="author"
                            fill
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="text-body-color mb-1 text-base font-medium">
                          By <span>Musharof Chy</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">📅</span> 12 Jan 2024
                      </p>
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <span className="mr-3">💬</span> 50
                      </p>
                      <p className="text-body-color flex items-center text-base font-medium">
                        <span className="mr-3">👁️</span> 35
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium">
                    Finding high-quality stock photos and digital assets doesn’t
                    have to cost a fortune. Whether you’re designing a website,
                    creating social posts, or building a presentation, these
                    free resources can save you time and money.
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="Stock photos"
                        fill
                        className="object-cover object-center grayscale filter"
                      />
                    </div>
                  </div>

                  <h3 className="font-xl mb-6 leading-tight font-bold text-black dark:text-white">
                    Top Free Stock Photo & Asset Websites
                  </h3>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li>
                      Pexels – Huge library of free stock photos and videos.
                    </li>
                    <li>
                      Unsplash – High-resolution photos for any creative use.
                    </li>
                    <li>
                      Pixabay – Photos, vectors, music, and videos free to use.
                    </li>
                    <li>
                      Freepik – Free design assets, vectors, and templates.
                    </li>
                    <li>
                      Stocksnap.io – Beautiful trending free photos updated
                      weekly.
                    </li>
                    <li>
                      Reshot – Unique stock photos for startups and creatives.
                    </li>
                    <li>Life of Pix – Artistic high-resolution photography.</li>
                    <li>
                      Gratisography – Quirky, fun, and creative stock images.
                    </li>
                    <li>DrawKit – Free illustrations and vector graphics.</li>
                    <li>Mixkit – Free videos, music, and stock footage.</li>
                  </ul>

                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium">
                    All of these platforms offer royalty-free content you can
                    use in personal or commercial projects without worrying
                    about licensing headaches. Just make sure to double-check
                    attribution requirements where necessary.
                  </p>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Resources" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Content */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
