import Link from "next/link";
import { IoLink } from "react-icons/io5";

const ContactForm = () => {
  return (
    <>
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
    </>
  );
};

const GoogleFormLink = () => {
  return (
    <div className="border px-4 py-2 rounded-xl">
      <Link
        href={"https://forms.gle/EikzMSbfMdhei2CD8"}
        className="flex gap-2 items-center"
      >
        <IoLink />
        <span>Click here to contact</span>
      </Link>
    </div>
  );
};

export { ContactForm, GoogleFormLink };
