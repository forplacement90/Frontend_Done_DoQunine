import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What makes DoUnique unique as a GitHub alternative?",
    answer: "DoUnique offers AI-powered code reviews, enhanced security, and seamless integrations."
  },
  {
    question: "How does DoUnique handle version control?",
    answer: "DoUnique supports Git-based version control with advanced branching and merging capabilities."
  },
  {
    question: "Does DoUnique support private repositories?",
    answer: "Yes, DoUnique allows you to create and manage private repositories with robust access controls."
  },
  {
    question: "What integrations does DoUnique support?",
    answer: "DoUnique integrates with CI/CD tools, cloud services, and issue-tracking platforms."
  },
  {
    question: "How secure is my code on DoUnique?",
    answer: "DoUnique uses end-to-end encryption, access control, and security monitoring to protect your code."
  },
  {
    question: "Does DoUnique offer AI-powered code reviews?",
    answer: "Yes, DoUnique provides AI-driven code analysis to enhance code quality and detect vulnerabilities."
  },
  {
    question: "Can I migrate my GitHub repositories to DoUnique?",
    answer: "Yes, DoUnique provides an easy migration tool to transfer repositories from GitHub."
  },
  {
    question: "Is DoUnique free to use?",
    answer: "DoUnique offers a free plan for individuals, with premium plans available for teams and enterprises."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-gray-400 mb-8">
        Find answers to common questions about our platform
      </p>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded-lg bg-gray-900">
            <button
              className="flex justify-between items-center w-full text-left text-white"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
