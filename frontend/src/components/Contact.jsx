// src/components/Contact.jsx
export default function Contact() {
  return (
    <section className="py-20 bg-gray-50 font-['Poppins']" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-6">
            Have questions or want to work with us? Fill out the form below or reach us directly.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d14f2a]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d14f2a]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d14f2a]"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d14f2a]"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d14f2a]"
            />
            <input
              type="text"
              placeholder="Estate / Area"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d14f2a]"
            />
            <textarea
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d14f2a]"
            />
            <button
              type="submit"
              className="bg-[#d14f2a] text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6429690409284!2d77.368325!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56d4f2a9b93%3A0xabcdef123456789!2sOberoi%20Marketing%20Private%20Limited!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}