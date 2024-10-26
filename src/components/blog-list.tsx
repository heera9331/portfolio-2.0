"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the Blog interface
interface Blog {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  content: {
    rendered: string;
  };
  link: string;
  jetpack_featured_media_url: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // State typed with Blog[]
  const [loading, setLoading] = useState<boolean>(false); // State typed with boolean

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://edevhindi.com/wp-json/wp/v2/posts"
        );
        const posts: Blog[] = await response.json(); // Ensure posts are typed as Blog[]
        setBlogs(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="rounded-lg mt-4">
      <h2 className="text-2xl font-semibold">Blogs</h2>

      <section className="flex flex-col gap-4 mt-6">
        {loading && <div className="loader"></div>}
        <ul className="grid grid-cols-2 sm:gap-2 md:gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-span-2 md:col-span-1 w-full">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  alt={blog.title.rendered}
                  src={blog.jetpack_featured_media_url}
                  width={400} // Specify width and height to avoid layout shift
                  height={300}
                  className="rounded-2xl hover:scale-[1.05] transition-all delay-200"
                />
              </div>
              <div className="post-meta my-2 flex flex-col justify-center">
                <p className="flex gap-2">
                  <i className="flex gap-2 items-center">
                    <span className="material-symbols-outlined text-yellow">
                      account_circle
                    </span>
                    <span className="text-yellow">Heera Singh Lodhi</span>
                  </i>
                  <i className="text-yellow flex items-center">
                    {new Date(blog.date).toLocaleDateString()}
                  </i>
                </p>
                <h2 className="text-xl font-semibold mt-2">
                  <Link href={blog.link} target="_blank">
                    {blog.title.rendered}
                  </Link>
                </h2>
                <div className="my-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.content.rendered.slice(0, 100),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          {!loading && blogs.length === 0 && <p>No blogs found</p>}
        </ul>
      </section>
    </div>
  );
};

export default Blogs