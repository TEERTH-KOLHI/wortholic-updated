import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-white py-1 md:py-12 lg:py-10 dark:bg-black"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with fresh insights, stories, and tips in our latest blogs."
          center
        />

        {/* FIXED: removed mx-auto & max-w, reduced gap */}
        <div className="flex justify-center gap-5 overflow-x-auto">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-90 shrink-0">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
