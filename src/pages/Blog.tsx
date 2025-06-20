import { motion } from "framer-motion";

export default function Blog() {
  const blogPosts = [
    {
      title: "AI in Real-World Applications",
      date: "June 10, 2025",
      summary:
        "Explore how artificial intelligence is reshaping industries — from healthcare to space-tech — with real-world case studies.",
      image: "/assets/ai-human-bg.png",
    },
    {
      title: "Building Scalable SaaS with Spring Boot",
      date: "May 28, 2025",
      summary:
        "Learn the architectural blueprint to build secure, modular SaaS platforms using Java Spring Boot and microservices.",
      image: "https://source.unsplash.com/featured/?coding",
    },
    {
      title: "Why UI/UX is the Backbone of Digital Success",
      date: "April 15, 2025",
      summary:
        "Good design isn't a luxury — it's a necessity. Let’s dive into why user experience is at the heart of tech excellence.",
      image: "https://source.unsplash.com/featured/?design,tech",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="container mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Our Latest Blog Posts
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-100 rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 text-sm mb-4">{post.summary}</p>
                <button className="text-blue-600 hover:underline font-medium">
                  Read more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
