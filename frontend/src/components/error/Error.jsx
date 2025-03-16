import React from 'react'
import SubComponent from '../SubComponent'
import Footer from '../Footer'

export const Error = () => {
  return (
    <div>
   <SubComponent/>

   <Footer/>
    </div>
  )
}


// Upcoming Events Component
const UpcomingEvents = () => {
  const events = [
    "Tech Conference - Dec 15",
    "Developer Meetup - Dec 25",
    "Hackathon - Jan 5",
    "AI Summit - Jan 20",
    "Startup Pitch - Feb 10",
  ];
  const event1 = [
    "Blockchain Expo - Feb 25",
    "Cloud Computing Summit - Mar 10",
    "Cybersecurity Workshop - Mar 22",
    "Web3 Innovation Forum - Apr 5",
    "Data Science Bootcamp - Apr 18",
    "Open Source Contribution Day - May 1",
    "VR & AR Tech Meetup - May 15",
    "Quantum Computing Talk - Jun 8",
    "FinTech Startup Summit - Jun 20",
    "IoT & Smart Devices Conference - Jul 5"
  ];
  const event2 = [
    "AI Innovations Summit - Apr 15",
    "Startup Pitch Competition - Apr 25",
    "Machine Learning Bootcamp - May 10",
    "Crypto & Blockchain Forum - May 22",
    "Global Hackathon 2025 - Jun 5",
    "Cloud & DevOps Conference - Jun 20",
    "Ethical Hacking Workshop - Jul 3",
    "Next-Gen Web3 Summit - Jul 15",
    "Quantum Computing Symposium - Jul 30"
  ];
  
  

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 8000); // Change event every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="bg-blue-400 p-4 rounded-lg col-span-1">
      <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
      <div className="bg-blue-200 p-4 rounded-lg hover:bg-indigo-500 transition duration-300 mb-2">
        {events[currentEventIndex]}
      </div>
      <div className="bg-blue-200 p-4 rounded-lg hover:bg-indigo-500 transition duration-300 mb-2">
        {event1[currentEventIndex]}
      </div>
      <div className="bg-blue-200 p-4 rounded-lg hover:bg-indigo-500 transition duration-300 mb-2">
        {event2[currentEventIndex]}
      </div>
    </aside>
  );
};



<UpcomingEvents />