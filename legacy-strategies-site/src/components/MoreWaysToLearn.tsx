import Link from 'next/link';

const MoreWaysToLearn = () => {
  const learningOptions = [
    { title: 'Start with Legacy RISA-Style Assessment', link: '/assessment' },
    { title: 'Highly-rated Guides', link: '/guides' },
    { title: 'Stewardship Workshops', link: '/workshops' },
    { title: 'Join the 1322 Academy', link: '/academy' },
  ];

  return (
    <section className="w-full bg-cream py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-navy">More Ways to Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {learningOptions.map((option, index) => (
            <Link href={option.link} key={index}>
              <div className="bg-white p-8 rounded-lg shadow-md cursor-pointer">
                <p className="font-sans text-lg text-navy">{option.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreWaysToLearn;
