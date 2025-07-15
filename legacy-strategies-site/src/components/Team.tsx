const Team = () => {
  const teamMembers = [
    { name: 'Brad Raschke CFP®', title: 'Founder & Chief Steward', bio: 'Full bio for Brad Raschke...' },
    { name: 'Placeholder', title: 'Associate Steward', bio: 'Full bio for the second adviser...' },
  ];

  return (
    <section className="w-full bg-cream py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-serif text-4xl font-bold text-navy">Knowledgeable. Personable.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md cursor-pointer">
              <h3 className="font-serif text-2xl font-bold text-navy">{member.name}</h3>
              <p className="font-sans text-lg text-navy mt-4">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
