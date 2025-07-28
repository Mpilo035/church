import { useQuery } from "@tanstack/react-query";
import type { Event } from "@shared/schema";

export default function EventsSection() {
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  const handleRegister = () => {
    alert('Event registration feature coming soon! Please contact us directly.');
  };

  const handleLearnMore = () => {
    alert('More details coming soon! Please contact us for more information.');
  };

  if (isLoading) {
    return (
      <section className="centered-section" id="events">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="event-card animate-pulse">
              <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-600 rounded w-full"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="centered-section" id="events">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
      
      <div className="space-y-4">
        {events?.map((event) => (
          <div key={event.id} className="event-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="font-medium mb-2" style={{ color: 'var(--church-blue)' }}>{event.dateTime}</p>
                <p className="text-gray-300">{event.description}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <button 
                  className="btn-primary mr-2"
                  onClick={handleRegister}
                >
                  Register
                </button>
                <button 
                  className="btn-primary"
                  onClick={handleLearnMore}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
