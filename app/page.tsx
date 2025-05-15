import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

//comment

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-cover bg-center text-white" style={{ backgroundImage: "url('/background.JPG')" }}>
      <header className="w-full bg-black bg-opacity-50 p-4 fixed top-0 left-0 z-50 shadow-md">
        <nav className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Gannon</h1>
          <ul className="flex space-x-6 text-sm md:text-base">
            <li><Link href="#ml">Machine Learning</Link></li>
            <li><Link href="#data">Data Projects</Link></li>
            <li><Link href="#games">Games</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="flex-grow flex flex-col items-center justify-center text-center pt-32 px-4">
        <Image
          src="/profile.JPG"
          alt="Gannon profile"
          width={200}
          height={200}
          className="rounded-full shadow-lg border-4 border-white"
        />

        <div className="mt-10">
          <Link href="/Gannon_Kenney-McGowan_Resume.pdf">
            <Button size="lg">Download My Resume</Button>
          </Link>
        </div>
      </section>

      <footer className="bg-black bg-opacity-60 text-sm text-white py-4 text-center" id="contact">
        <p>
          © Gannon — <Link href="https://www.linkedin.com/in/gannon-kenney-mcgowan-814366181/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</Link>
          {" | "}
          <Link href="https://github.com/yourgithub">GitHub</Link>
        </p>
      </footer>
    </main>
  );
}
