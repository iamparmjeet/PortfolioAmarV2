const d = new Date();
const year = d.getFullYear();

function Footer() {
  return (
    <footer className="container text-lime-600 py-8 px-2  mx-auto w-full bg-lime-400/5 rounded-lg text-center mb-4">
      ©
      {" "}
      {year}
      {" "}
      All Rights Reserved | Made with ♡ by
      {" "}
      <a href="https://parmjeetmishra.com" target="_blank" className="hover:text-lime-400">Parm</a>
    </footer>
  );
}

export default Footer;
