import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      {" "}
      <p className="text-2xl md:text-3xl font-light leading-normal">
        Sorry we could notfind this page.{" "}
      </p>
      <Link
        href="/"
        className="flex items-center gap-1 px-6 py-3 mx-auto mt-4 btn-primary w-max"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
