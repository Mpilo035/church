import { Users, Baby, Music, Heart, UserCheck, HelpingHand } from "lucide-react";

export default function MinistriesSection() {
  const ministries = [
    {
      name: "Children's Ministry",
      description: "Providing a safe, fun environment where children can learn about God's love through age-appropriate lessons, games, and activities.",
      ageGroup: "Ages: Nursery - 5th Grade",
      icon: Baby
    },
    {
      name: "Youth Ministry", 
      description: "Empowering teenagers to develop a strong faith foundation through engaging activities, mission trips, and mentorship programs.",
      ageGroup: "Ages: 6th - 12th Grade",
      icon: Users
    },
    {
      name: "Worship Ministry",
      description: "Leading our congregation in heartfelt worship through contemporary and traditional music, choir, and special performances.",
      schedule: "Rehearsals: Thursday 7:00 PM",
      icon: Music
    },
    {
      name: "Community Outreach",
      description: "Serving our local community through food drives, homeless shelter support, and various volunteer opportunities.",
      schedule: "Monthly Projects",
      icon: HelpingHand
    },
    {
      name: "Women's Ministry",
      description: "Building meaningful relationships among women through Bible studies, social events, and service opportunities.",
      schedule: "Tuesday 10:00 AM",
      icon: Heart
    },
    {
      name: "Men's Ministry",
      description: "Encouraging men to grow in their faith through fellowship, accountability, and service to God and family.",
      schedule: "Saturday 7:00 AM",
      icon: UserCheck
    }
  ];

  return (
    <section className="centered-section" id="ministries">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Ministries</h2>
      
      <div className="grid md:grid-cols-2 gap-4">
        {ministries.map((ministry, index) => {
          const IconComponent = ministry.icon;
          return (
            <div key={index} className="ministry-card">
              <h3 className="text-xl font-semibold mb-3">
                <IconComponent 
                  size={20} 
                  className="inline mr-2" 
                  style={{ color: 'var(--church-blue)' }} 
                />
                {ministry.name}
              </h3>
              <p className="text-gray-300">{ministry.description}</p>
              {ministry.ageGroup && (
                <p className="text-sm mt-2" style={{ color: 'var(--church-blue)' }}>{ministry.ageGroup}</p>
              )}
              {ministry.schedule && (
                <p className="text-sm mt-2" style={{ color: 'var(--church-blue)' }}>{ministry.schedule}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
