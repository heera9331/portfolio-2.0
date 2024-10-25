"use client";
import Image from "next/image";
import Card from "./Card";
import toast from "react-hot-toast";

const Sidebar = ({ className = "" }: { className?: string }) => {
  // Function to copy text to clipboard and show toast
  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success(message);
      })
      .catch(() => {
        toast.error("Failed to copy");
      });
  };

  return (
    <>
      <Card
        className={`flex flex-col items-center gap-2 sm:hidden md:flex ${className}`}
      >
        <div className="avtar-wrap p-4">
          <Image
            className="p-2 w-3/4 h-3/4 bg-ternary rounded-3xl m-auto min-w-[200px]"
            src="https://avatars.githubusercontent.com/u/71516269?v=4"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <h1 className="text-3xl font-bold w-full text-center">
          Heera Singh Lodhi
        </h1>
        <p className="text-center w-4/5 profession bg-red-800 text-white font-semibold px-2 py-1 rounded-md mt-2">
          Web Developer
        </p>

        <hr className="border w-full my-8 opacity-60" />

        <ul className="flex flex-col gap-6">
          <li
            className="flex gap-4 cursor-pointer"
            onClick={() =>
              copyToClipboard("8085589371", "Phone number copied!")
            }
          >
            <div className="bg-ternary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">phone</span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">Mobile</p>
              8085589371
            </div>
          </li>
          <li
            className="flex gap-4 cursor-pointer"
            onClick={() =>
              copyToClipboard("Sagar, MP-470001", "Address copied!")
            }
          >
            <div className="bg-ternary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">place</span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">Address</p>
              Sagar, MP-470001
            </div>
          </li>
          <li
            className="flex gap-4 cursor-pointer"
            onClick={() =>
              copyToClipboard("heera9331@gmail.com", "Email copied!")
            }
          >
            <div className="bg-ternary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">Email</p>
              <a href="#">heera9331@gmail.com</a>
            </div>
          </li>
          <li
            className="flex gap-4 cursor-pointer"
            onClick={() =>
              copyToClipboard(
                "https://github.com/heera9331",
                "GitHub link copied!"
              )
            }
          >
            <div className="bg-ternary p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">link</span>
            </div>
            <div>
              <p className="font-semibold text-gray-500 text-sm">GitHub</p>
              <a href="#">github.com/heera9331</a>
            </div>
          </li>
        </ul>
      </Card>
    </>
  );
};

export default Sidebar;
