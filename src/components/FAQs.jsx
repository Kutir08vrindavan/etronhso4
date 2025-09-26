// src/pages/FAQs.jsx
export default function FAQs() {
  const faqs = [
    {
      question: "What services does E-tron provide?",
      answer: "E-tron provides innovative technology solutions including consulting, products, and support services.",
    },
    {
      question: "How can I contact support?",
      answer: "You can contact us via the contact form on our website, email, or social media channels.",
    },
    {
      question: "Do you have a subscription service?",
      answer: "Yes, you can subscribe to our newsletter to receive the latest updates and promotions.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 font-['Playfair_Display']">
      <h1 className="text-3xl font-bold mb-6 text-[#283b91]">Frequently Asked Questions (FAQs)</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
          <p className="text-gray-700 mt-2">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
