export default function ServicesSection() {
  const services = [
    {
      name: "Sunday Morning Worship",
      time: "9:00 AM & 12:00 PM",
      description: "Join us for inspiring worship, bible teachings, and fellowship."
    },
    {
      name: "Wednesday Bible Study",
      time: "7:00 PM",
      description: "Deep dive into God's word with our midweek study groups."
    },
    {
      name: "Youth Group",
      time: "Friday 6:30 PM",
      description: "Fun, fellowship, and faith-building for teens and young adults."
    }
  ];

  return (
    <section className="centered-section" id="services">
      <h2 className="text-3xl font-bold mb-6 text-center">Service Times & Location</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--church-blue)' }}>Weekly Services</h3>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
              <p className="font-medium mb-2" style={{ color: 'var(--church-blue)' }}>{service.time}</p>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--church-blue)' }}>Visit Us</h3>
          <div className="service-card">
            <h4 className="font-semibold text-lg mb-2">Branch names</h4>
            <p className="mb-4">
              KwaDUMA,OSUTHU,
              CANAAN,SHISIZWE,GWELEZANE,<br />
              MTUBATUBA,SHOBA,ESPHAMBANWENI<br />
              
            </p>
            
            <h4 className="font-semibold text-lg mb-2">Contact</h4>
            <p className="mb-2">Phone NO. Youth Pastor:083 753 4341 <span style={{ color: 'var(--church-blue)' }}></span></p>
            <p className="mb-2">Phone NO. leader:067 306 5012 <span style={{ color: 'var(--church-blue)' }}></span></p>
            <p>Email: <span style={{ color: 'var(--church-blue)' }}>INFO@NCMCI.ORG.ZA</span></p>
          </div>
          
          <div className="service-card mt-4">
            <h4 className="font-semibold text-lg mb-2">Location Map</h4>
            <img 
              src="https://images.unsplash.com/photo-1520637836862-4d197d17c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="New Covenant Mondate Church International" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-sm mt-2 text-gray-300">Click to view interactive map and get directions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
