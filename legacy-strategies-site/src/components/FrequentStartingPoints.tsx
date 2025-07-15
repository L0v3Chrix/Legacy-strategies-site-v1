const FrequentStartingPoints = () => {
  const points = [
    "How do I control my capital—today?",
    "What is Infinite Banking and why does it matter?",
    "How do I keep money in the family?",
    "How do I fund retirement without surrendering control?",
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-navy">Frequent Starting Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {points.map((point, index) => (
            <div key={index} className="bg-cream p-8 rounded-lg shadow-md">
              <p className="font-sans text-lg text-navy">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentStartingPoints;
