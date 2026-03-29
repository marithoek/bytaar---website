import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#b5c7ae] text-white py-10 px-10 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-4">Tara Visser - bytaar</h4>
          <p className="mb-1">Email: tara.visser@hotmail.com</p>
          <p className="mb-1">Tel: +31 6 37 56 00 37</p>
          <p>Wormerveer, Nederland</p>
        </div>
        <div>
          <a
            href="https://instagram.com/bytaar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-white no-underline text-lg transition-opacity duration-300 hover:opacity-80"
          >
            <Instagram className="w-6 h-6" />
            <span>@bytaar</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
