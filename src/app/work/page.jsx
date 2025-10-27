export default function WorkPage() {
  const works = [
    {
      title: "Modern Logo Design",
      img: "/1.jpg",
      desc: "A sleek minimal logo design using geometric balance.",
    },
    {
      title: "Business Card Layout",
      img: "/2.jpeg",
      desc: "Professional card design with a clean typography structure.",
    },
    {
      title: "Brand Poster",
      img: "/3.jpeg",
      desc: "Creative marketing poster for a brand launch event.",
    },    {
      title: "Modern Logo Design",
      img: "/4.jpg",
      desc: "A sleek minimal logo design using geometric balance.",
    },
    {
      title: "Business Card Layout",
      img: "/5.jpeg",
      desc: "Professional card design with a clean typography structure.",
    },
    {
      title: "Brand Poster",
      img: "/6.jpeg",
      desc: "Creative marketing poster for a brand launch event.",
    },
        {
      title: "Modern Logo Design",
      img: "/7.jpeg",
      desc: "A sleek minimal logo design using geometric balance.",
    },
    {
      title: "Business Card Layout",
      img: "/8.jpeg",
      desc: "Professional card design with a clean typography structure.",
    },
    {
      title: "Brand Poster",
      img: "/9.jpeg",
      desc: "Creative marketing poster for a brand launch event.",
    },
        {
      title: "Modern Logo Design",
      img: "/10.jpeg",
      desc: "A sleek minimal logo design using geometric balance.",
    },
    {
      title: "Business Card Layout",
      img: "/11.jpeg",
      desc: "Professional card design with a clean typography structure.",
    },
    {
      title: "Brand Poster",
      img: "/12.jpeg",
      desc: "Creative marketing poster for a brand launch event.",
    },
 {
      title: "Brand Poster",
      img: "/13.jpeg",
      desc: "Creative marketing poster for a brand launch event.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          My <span className="text-purple-500">Graphic Works</span>
        </h1>
        <p className="text-gray-400 mb-12">
          Explore a selection of my professional graphic design projects showcasing creativity, balance, and modern aesthetics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-purple-700/20 transition-all duration-300"
            >
              <img src={work.img} alt={work.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                <p className="text-gray-400 text-sm">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
