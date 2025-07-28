export default function AboutSection() {
  const leadership = [
    {
      name: "Pastor V.S SYAYA",
      title: "Senior Pastor",
      bio: "Serving our community for over 15 years with passion and dedication.",
      photo: "https://images.pexels.com/photos/33145600/pexels-photo-33145600.jpeg"
    },
    {
      name: "Pastor P.G Syaya",
      title: "Associate Pastor",
      bio: "Leading our Women ministries with joy and creativity.",
      photo: "https://images.pexels.com/photos/33145656/pexels-photo-33145656.jpeg"
    }
  ];

  return (
    <section className="centered-section" id="about">
      <h2 className="text-3xl font-bold mb-6 text-center">About New Covenant Mandate Church International</h2>
      
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--church-blue)' }}>Our History</h3>
          <p className="mb-4">
            Founded in 1985, NCMCI Church began as a small gathering of families committed to studying God's word and supporting one another. Over the years, we've grown into a thriving community of over 800 members, while maintaining our core values of love, service, and authentic fellowship.
          </p>
          <p>
            Our mission is to make disciples who love God, love people, and serve the world. We believe that everyone has a place in God's family and a purpose in His kingdom.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--church-blue)' }}>Our Leadership</h3>
          <div className="space-y-4">
            {leadership.map((leader, index) => (
              <div key={index} className="leadership-card">
                <img 
                  src={leader.photo} 
                  alt={leader.name} 
                  className="leadership-photo"
                />
                <h4 className="font-semibold text-lg">{leader.name}</h4>
                <p style={{ color: 'var(--church-blue)' }}>{leader.title}</p>
                <p className="text-sm mt-2">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
