"use client";
import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useSearchParams();
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    setActiveTab(params.get("tab") ?? "home");
  }, [params]);

  return (
    <div className="grid grid-cols-12 px-4 md:px-10 lg:px-40 gap-4 my-4 relative">
      <Sidebar
        className={"hidden md:block md:col-span-3 sticky top-4 !min-h-[95vh]"}
      />

      <Card className="card flex gap-4 col-span-12 md:hidden">
        <div className="flex items-center justify-center p-0 bg-ternary rounded-2xl">
          <Image
            className="w-[100px]"
            width={200}
            height={200}
            src={"/images/avatars/heera.png"}
          />
        </div>
        <div className="flex flex-col gap-2 my-1">
          <h1 className="text-2xl font-semibold">Heera Singh Lodhi</h1>
          <p className="px-3 py-1 rounded-lg bg-red-500 text-light text-center w-fit">Web Developer</p>
        </div>
      </Card>

      <Card className="col-span-12 md:col-span-9 min-w-full !min-h-[95vh]">
        <main className="w-full">
          {/* navigation */}
          <nav className="">
            <ul className="flex gap-1 bg-ternary p-3 rounded-lg overflow-auto">
              {[
                "home",
                "education",
                "experience",
                "projects",
                "skills",
                "blogs",
                "contacts",
              ].map((tab) => (
                <li
                  key={tab}
                  className={`mr-2 px-2 py-1 rounded-lg cursor-pointer font-medium ${
                    activeTab === tab
                      ? "bg-primary text-yellow"
                      : "bg-secondary text-light"
                  }`}
                  onClick={() => handleTabChange(tab)}
                >
                  <Link href={`?tab=${tab}`}>
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </main>

        {activeTab === "home" && <Home />}
        {activeTab === "education" && <Education />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "blogs" && <Blogs />}
        {activeTab === "contacts" && <Contacts />}
      </Card>
    </div>
  );
}

const Home = () => {
  return (
    <div className="rounded-lg mt-4">
      {/* about me */}
      <div className="flex flex-col gap-3 font-medium">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I am Heera Singh Lodhi, a passionate and dedicated fresher with a
          strong foundation in computer science and engineering.
        </p>
        <p>
          I have a keen interest in programming and possess solid knowledge of
          object-oriented programming, data structures and algorithms, HTML,
          CSS, JavaScript, WordPress, C programming, Java, and Python.
        </p>
        <p>
          With a creative mindset and strong problem-solving skills, I strive to
          contribute my skills and enthusiasm to challenging projects.
        </p>
      </div>

      {/* what i am doing */}
      <div className="flex flex-col gap-3 font-medium mt-4">
        <h2 className="text-2xl font-semibold">What I&apos; m doing</h2>
        <ul className="grid grid-cols-2 gap-6">
          <li className="col-span-2 md:col-span-1 border p-2 rounded-[12px] flex gap-2 items-center">
            <div className="p-4">
              <span className="material-symbols-outlined text-[20px] text-green-600">
                check_circle
              </span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Web Design</h3>
              <p>
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1 border p-2 rounded-[12px] flex gap-2 items-center">
            <div className="p-4">
              <span className="material-symbols-outlined text-[20px] text-green-600">
                check_circle
              </span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Web development</h3>
              <p>
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1 border p-2 rounded-[12px] flex gap-2 items-center">
            <div className="p-4">
              <span className="material-symbols-outlined text-[20px] text-green-600">
                check_circle
              </span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Mobile apps</h3>
              <p>
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1 border p-2 rounded-[12px] flex gap-2 items-center">
            <div className="p-4">
              <span className="material-symbols-outlined text-[20px] text-green-600">
                check_circle
              </span>
            </div>
            <div className="">
              <h3 className="font-semibold text-xl">Content Creator</h3>
              <p>I make high-quality technical content in native languages.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* testimonials */}

      <div className="flex flex-col gap-3 font-medium mt-4">
        <h2 className="text-2xl font-semibold">Testimonials</h2>

        <ul className="grid grid-cols-2 gap-6">
          <li className="col-span-2 md:col-span-1 border p-6 rounded-[12px] flex flex-col gap-2 justify-center items-center">
            <div className="p-4">
              <Image
                className="bg-ternary rounded-3xl w-[120px]"
                src={`/images/avatars/abhay.png`}
                width={150}
                height={150}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="font-semibold text-xl">Abhay Patel</h3>
              <p className="text-left">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1 border p-6 rounded-[12px] flex flex-col gap-2 justify-center items-center">
            <div className="p-4">
              <Image
                className="bg-ternary rounded-3xl w-[120px]"
                src={`/images/avatars/amisha.png`}
                width={150}
                height={150}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="font-semibold text-xl">Amisha</h3>
              <p className="text-left">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1 border p-6 rounded-[12px] flex flex-col gap-2 justify-center items-center">
            <div className="p-4">
              <Image
                className="bg-ternary rounded-3xl w-[120px]"
                src={`/images/avatars/abhay.png`}
                width={150}
                height={150}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="font-semibold text-xl">Rahul Kurmi</h3>
              <p className="text-left">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>
          <li className="col-span-2 md:col-span-1 border p-6 rounded-[12px] flex flex-col gap-2 justify-center items-center">
            <div className="p-4">
              <Image
                className="bg-ternary rounded-3xl w-[120px]"
                src={`/images/avatars/abhay.png`}
                width={150}
                height={150}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="font-semibold text-xl">Abhishek</h3>
              <p className="text-left">
                I make high-quality technical content in native languages.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className="rounded-lg mt-4">
      <h2 className="text-2xl font-semibold">Education</h2>

      <section className="flex flex-col gap-2 mt-6">
        <h4 className="font-semibold">B.Tech in Computer Science</h4>
        <p>
          <i>Rajiv Prodhyougiki Vishwavidyalaya, Bhopal MP</i>
        </p>
        <p className="text-yellow">2020-2024</p>
        <p>
          As a B.Tech CSE student, I have undergone a comprehensive curriculum
          that encompasses various core areas of computer science and
          engineering.
        </p>
        <p>
          My education provided a strong foundation in computer science and
          engineering principles, along with practical skills in software
          development, data science, and web technologies.
        </p>
      </section>

      <section className="flex flex-col gap-2 mt-6">
        <h4 className="font-semibold">Higher Secondary Education</h4>
        <p>
          <i>Rajiv Prodhyougiki Vishwavidyalaya, Bhopal MP</i>
        </p>
        <p className="text-yellow">2019-2020</p>
        <p>
          My education provided a strong foundation in computer science and
          engineering principles, along with practical skills in software
          development, data science, and web technologies.
        </p>
      </section>

      <section className="flex flex-col gap-2 mt-6">
        <h4 className="font-semibold">Higher School (10th Standard)</h4>
        <p>
          <i>Government Higher Secondary School, Bela Purwa, Damoh (MP)</i>
        </p>
        <p className="text-yellow">March 2024 - April 2024</p>
        <p>
          Completed the 10th standard with a curriculum including Hindi,
          English, Sanskrit, Mathematics, Science, and Social Science.
        </p>
      </section>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="rounded-lg mt-4">
      <h2 className="text-2xl font-semibold">Experience</h2>

      <section className="flex flex-col gap-2 mt-6">
        <h4 className="font-semibold">Web Developer</h4>
        <p>
          <i>MadQuick PVT LTD, Sagar MP - 470001</i>
        </p>
        <p className="text-yellow">April 2024 - Present</p>
        <p>
          Working as a full-time Web Developer, contributing to various web
          development projects and enhancing the company&apos;s online presence.
        </p>
      </section>

      <section className="flex flex-col gap-2 mt-6">
        <h4 className="font-semibold">Web Developer Intern</h4>
        <p>
          <i>MadQuick PVT LTD, Sagar MP - 470001</i>
        </p>
        <p className="text-yellow">March 2024 - April 2024</p>
        <p>
          Completed a web development internship, demonstrating quick learning
          abilities and strong technical skills, leading to a full-time job
          offer within a month.
        </p>
      </section>

      <section className="flex flex-col gap-2 mt-6">
        <h4 className="font-semibold">Unacademy Educator Intern</h4>
        <p>
          <i>Unacademy</i>
        </p>
        <p className="text-yellow">August 2023 - October 2023</p>
        <p>
          Successfully completed an educator internship on the Unacademy online
          platform. Achieved the 18th rank out of all educators in the GATE
          CS/IT category within one month.
        </p>
      </section>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="rounded-lg mt-4">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <section className="flex flex-col gap-2 mt-6">
        <h3 className="text-xl font-semibold">Personal Portfolio Website</h3>
        <p>
          <i className="text-yellow">Jul 2024 - Jul 2024</i>
        </p>
        <p className="font-semibold">
          Associated with MadQuick Pvt ltd- Web Development Company
        </p>
        <p>
          Developed a fully responsive and visually appealing personal portfolio
          using ReactJS and pure CSS. The portfolio showcases my skills,
          experience, and projects in a clean and professional layout.
        </p>
        <p>
          This project demonstrates my expertise in front-end development,
          focusing on modern design principles, performance optimization, and
          user-friendly navigation. It effectively highlights my proficiency
          with ReactJS for component-based development and pure CSS for styling,
          without relying on external libraries like Bootstrap.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQGbuhG6bf2_8g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1725739446719?e=1730397600&v=beta&t=kt16D-yXqJFoe2MFYBkLbhuUG4a3t44pLyfVEY0UdOs"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQF_7609F_lvZQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1725739581322?e=1730397600&v=beta&t=eEjRT7lWIJnv9w5uI8GHju8UF6sM3m8C5CBKgE1Yxtk"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-2 mt-6">
        <h3 className="text-xl font-semibold">Contentus Digital</h3>
        <p>
          <i className="text-yellow">Apr 2024 - Apr 2024</i>
        </p>
        <p className="font-semibold">
          Contentus digital company&apos;s website is completed in 2 days, by me
          and kamlesh using wordpress.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQFDcxp8BI739g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1713284116875?e=1730401200&v=beta&t=oH4uSHMGj3jUND9tmRXcyiA4O7vO43CwkXHInt7StUY"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQEI4B1drep0fg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1713284034451?e=1730401200&v=beta&t=TS9yowN4-e19H-EZDQMcApuqCRPCGAYLZkVikGjqRl8"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>

          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQF9EFtiAdiTyg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1713284017550?e=1730401200&v=beta&t=sESVEkAWGmf2y7kORYrA76oM0HS-xmQEh5CuX61hZc8"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-2 mt-6">
        <h3 className="text-xl font-semibold">edevhindi</h3>
        <p>
          <i className="text-yellow">Apr 2024 - Apr 2024</i>
        </p>
        <p className="font-semibold">
          Designed and developed a nice looking and responsive wordpress
          blogging website, this website provides programming and computer
          related knowledge
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQFJki81G4Eprw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1716137685526?e=1730401200&v=beta&t=RobEY_puWcocWFXqP1je3f8m9MoU8IfNCvP7mp6DvR4"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQGNc1ghSq8zTw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1716137579035?e=1730401200&v=beta&t=4DpZTaT_EmagWVIoQcyFxxe0SOWcF9kCypNiVwne-00"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>

          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQHV_arm6NC_jw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1716137508541?e=1730401200&v=beta&t=c6TIT2ObZfR4K4_c5mAfRtL-ABOnthV78EK2-prMTz0"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>

          <div className="border-ternary rounded-2xl">
            <Image
              width={1000}
              height={1000}
              src={
                "https://media.licdn.com/dms/image/v2/D4D2DAQHLFoWzH9sj_g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1716137460859?e=1730401200&v=beta&t=pHxjbvnobR1B2ZprnH7e2-siWajM80HYN2aNEO7ikL0"
              }
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="rounded-lg mt-4">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <ul className="flex flex-col gap-4 mt-6">
        <label htmlFor="">HTML</label>
        <li className="border w-full h-[24px] flex">
          <div className="w-[80%] bg-yellow h-[24px]"></div>
          <div className="w-[20%] h-[24px]"></div>
        </li>

        <label htmlFor="">CSS</label>
        <li className="border w-full h-[24px] flex">
          <div className="w-[80%] bg-yellow h-[24px]"></div>
          <div className="w-[20%] h-[24px]"></div>
        </li>

        <label htmlFor="">JS</label>
        <li className="border w-full h-[24px] flex">
          <div className="w-[80%] bg-yellow h-[24px]"></div>
          <div className="w-[20%] h-[24px]"></div>
        </li>

        <label htmlFor="">ReactJS</label>
        <li className="border w-full h-[24px] flex">
          <div className="w-[60%] bg-yellow h-[24px]"></div>
          <div className="w-[40%] h-[24px]"></div>
        </li>

        <label htmlFor="">NextJS</label>
        <li className="border w-full h-[24px] flex">
          <div className="w-[70%] bg-yellow h-[24px]"></div>
          <div className="w-[30%] h-[24px]"></div>
        </li>

        <label htmlFor="">WordPress</label>
        <li className="border w-full h-[24px] flex">
          <div className="w-[80%] bg-yellow h-[24px]"></div>
          <div className="w-[20%] h-[24px]"></div>
        </li>
      </ul>
    </div>
  );
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);
        const response = await fetch(
          "https://edevhindi.com/wp-json/wp/v2/posts"
        );
        const posts = await response.json();
        setBlogs(posts);
        setLoading(false);
      })();
    } catch (error: any) {
      console.log(error);
      console.log("error while fetching posts");
    }
  }, []);

  return (
    <div className="rounded-lg mt-4">
      <h2 className="text-2xl font-semibold">Blogs</h2>

      <section className="flex flex-col gap-4 mt-6">
        {loading && <div className="loader"></div>}
        <ul className="grid grid-cols-2 sm:gap-2 md:gap-6">
          {blogs.map((blog: any) => {
            return (
              <div key={blog.id} className="col-span-2 md:col-span-1 w-full">
                <div className="rounded-2xl">
                  <img
                    src={blog.jetpack_featured_media_url}
                    className="rounded-2xl"
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
                    {blog.title.rendered}
                  </h2>

                  <div className="my-2">
                    {blog.content.rendered.slice(0, 100)}
                  </div>
                </div>
              </div>
            );
          })}

          {!loading && blogs.length === 0 && <p>No blogs found</p>}
        </ul>
      </section>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="rounded-lg mt-4">
      <h2 className="text-2xl font-semibold">Contacts</h2>

      <section className="flex flex-col gap-4 mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3962052146744!2d78.76008037511812!3d23.84006067860927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d7ce672196ff%3A0x549976186a908f5!2sMadquick%20-%20Web%20Development%20Company!5e0!3m2!1sen!2sin!4v1729794724336!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-2xl"
        ></iframe>

        <form action="post" className="flex gap-2 flex-col">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex gap-2 flex-col border-ternary w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="name"
                name="name"
                id="name"
                className="rounded-lg px-4 py-2 bg-secondary border"
              />
            </div>

            <div className="flex gap-2 flex-col border-ternary w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="email"
                name="email"
                id="email"
                className="rounded-lg px-4 py-2 bg-secondary border"
              />
            </div>
          </div>

          <div className="flex gap-2 flex-col border-ternary w-full mt-2">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Ask anything"
              className="rounded-lg px-4 py-2 bg-secondary border"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button className="rounded-lg px-4 py-2 bg-secondary border mt-2">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};
