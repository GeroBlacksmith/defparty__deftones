import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 bg-blend-color-burn	 text-white min-h-screen">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center 	 h-screen flex flex-col justify-start items-center text-center"
        style={{
          backgroundImage: 'url("images/defparty_crew.webp")',
        }}
      >
     
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blend-color-burn bg-black opacity-80">
        <div className="w-full h-full p-8 bg-blend-color-burn flex flex-col justify-center items-center">
          <h1 className="text-9xl font-bold mb-4 drop-shadow-lg">Defparty</h1>
          <div className="bg-gray-700 p-6 rounded-lg shadow">
                <div className="w-full flex flex-col items-center justify-center">
                  <Link href="https://www.instagram.com/defparty__deftones/">
                  <Image
                    width={300}
                    height={600}
                    src="/images/evento-1.jpg"
                    alt="Flyer del evento"
                    />
                    </Link>
                </div>
                <h3 className="text-2xl font-semibold">
                  En vivo en Spazio Morrigan, Junto los amigos de Sutura
                </h3>
                <p>21 de diciembre, 2024</p>
                <p>Entrada: $4000</p>
                <p>Alias: defparty.nqn</p>
              </div>
        {/*   <p className="text-xl mb-6">Tributo a Deftones</p> */}
         {/*  <a
            href="#about"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-full transition"
          >
            Saber más
          </a> */}
        </div>
        </div>
      </header>

      {/* About Section */}
     {/*  <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Sobre nosotros</h2>
          <p className="text-lg">
            Somos <span className="font-bold">Defparty</span>, una banda tributo
            a Deftones. Nos apasiona capturar la esencia de sus canciones, desde
            los riffs melódicos hasta las explosiones de energía.
          </p>
        </div>
      </section> */}

      {/* Upcoming Events Section */}
    {/*   <section className="bg-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Próximos eventos</h2>
          <ul>
            <li className="mb-4">
              <div className="bg-gray-700 p-6 rounded-lg shadow">
                <div className="w-full flex flex-col items-center justify-center">
                  <Link href="https://www.instagram.com/defparty__deftones/">
                  <Image
                    width={300}
                    height={600}
                    src="/images/evento-1.jpg"
                    alt="Flyer del evento"
                    />
                    </Link>
                </div>
                <h3 className="text-2xl font-semibold">
                  En vivo en Spazio Morrigan, Junto los amigos de Sutura
                </h3>
                <p>21 de diciembre, 2024</p>
                <p>Entrada: $4000</p>
              </div>
            </li>
          </ul>
        </div>
      </section> */}

      {/* "El Tema del Día" Section */}
      {/* <section id="song-of-the-day" className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">El Tema del Día</h2>
          <p className="text-lg mb-6">
            El tema que nos machacará la cabeza por hoy
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/11ImVzWeMHE" // Cambia esta URL al video que desees
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto hidden md:block"
          ></iframe>
             <iframe
            width="280"
            height="157"
            src="https://www.youtube.com/embed/11ImVzWeMHE" // Cambia esta URL al video que desees
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mx-auto block md:hidden"
          ></iframe>
        </div>
      </section> */}

     
      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center">
        <p>© 2024 Defparty. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://instagram.com/defparty__deftones"
            target="_blank"
            className="hover:text-blue-500"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
