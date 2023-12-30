import React from "react";

export const metadata = {
  title: "Contact | Mindmap",
  description: "Collaborative Mind Mapping",
  openGraph: {
    title: "Contact | Mindmap",
    description: "Collaborative Mind Mapping",
  },
};

const Contact = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
      />
      <div className="container mx-auto my-20 w-1/3 border border-purple-500 bg-white">
        <div className="p-5 space-y-5 shadow-xl">
          <h4 className="text-center text-3xl">Contact Us</h4>
          <form>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Email"
              />
              <input
                type="tel"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Phone"
              />
              <textarea
                cols={10}
                rows={5}
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Write your message..."
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              defaultValue="Send Message"
              className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
