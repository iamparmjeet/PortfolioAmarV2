import Logo from "./logo";
import NavHeader from "./nav";

export default function Header() {
  return (

    <header className="flex items-center justify-between">
      <Logo />
      <NavHeader />
    </header>
  );
}
