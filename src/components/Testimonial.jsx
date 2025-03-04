import React from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    company: "InnovateTech",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Switching to DoUnique transformed our development workflow. The AI-powered code reviews saved us hours of manual review time!",
  },
  {
    name: "Emily Carter",
    role: "CTO",
    company: "NextGen Solutions",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Managing multiple repositories with DoUnique is effortless. The seamless Git integrations and security features are top-notch!",
  },
  {
    name: "David Martinez",
    role: "DevOps Engineer",
    company: "CloudWave",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    feedback:
      "The collaborative tools made teamwork more efficient. The built-in CI/CD support was a game-changer for our deployment process.",
  },
  {
    name: "Vivek Yadav",
    role: "AI Engineer",
    company: "CloudWave",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    feedback:
      "The collaborative tools made teamwork more efficient. The built-in CI/CD support was a game-changer for our deployment process.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <h2 className="text-center text-3xl font-bold mb-10">What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-2xl shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full border-2 border-gray-400"
              />
              <div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300 italic">
              <span className="text-xl text-primary">“</span>
              {testimonial.feedback}
              <span className="text-xl text-primary">”</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
