import React from "react";

function ContactSection() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Contáctanos</h2>
          <p className="text-lg mb-6">
            ¡Conéctate con nosotros a través de nuestras redes sociales!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/defparty__deftones" // Cambia este enlace por el de tu Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-lg"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/1234567890" // Cambia este número por el de tu grupo de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-600 text-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
