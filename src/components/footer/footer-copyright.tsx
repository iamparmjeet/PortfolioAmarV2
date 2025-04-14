"use client";

const d = new Date();
const year = d.getFullYear();

export default function FooterCopyright() {
  return (
    <section className=" text-lime-600/90 py-8 px-2 mx-auto bg-lime-400/5 rounded-lg text-center mb-4">
      <p>
        ©
        {" "}
        {year}
        {" "}
        All Rights Reserved | Made with ♡ by
        {" "}
        <a
          href="https://parmjeetmishra.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-lime-500"
        >
          Parm
        </a>
      </p>
    </section>
  );
}
