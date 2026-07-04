import React from "react";
import Card from "./components/card";

const App = () => {
  const jobs = [
    {
      id: 1,
      brandLogo:
        "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
      company: "Google",
      posted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Bangalore, India",
    },
    {
      id: 2,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwx191VTOd_DCspfA_UkGMDr1QwYMy8WsoraoYjPyHqQ&s=10",
      company: "Meta",
      posted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Hyderabad, India",
    },
    {
      id: 3,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10",
      company: "Amazon",
      posted: "1 week ago",
      post: "MERN Stack Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Chennai, India",
    },
    {
      id: 4,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2WwEvTUHVPlvyQ2-TnGqUOloNMydpv5M9-73YQvjHg&s=10",
      company: "Apple",
      posted: "3 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Mumbai, India",
    },
    {
      id: 5,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROvcfhHzHC7wARBozEoCxnQsJSOzzeYzTuJH-cJEhlA&s=10",
      company: "Microsoft",
      posted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$70/hr",
      location: "Noida, India",
    },
    {
      id: 6,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hKvQtzP8Sysld7IjuXoQ9WQaCC9q9exmWc76G38lew&s=10",
      company: "Netflix",
      posted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Remote",
    },
    {
      id: 7,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH_HAfShiIy_---9-GFR4MQwsLS4kqu-zVkAa6-kbzg&s=10",
      company: "NVIDIA",
      posted: "6 days ago",
      post: "React UI Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hr",
      location: "Pune, India",
    },
    {
      id: 8,
      brandLogo:
        "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
      company: "Adobe",
      posted: "10 days ago",
      post: "Frontend Software Engineer",
      tag1: "Hybrid",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Bangalore, India",
    },
    {
      id: 9,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzOmBdjvBwkUYFrA2i5TMOb5CT5Mky3d6G1TXi-UlXA&s=10",
      company: "Uber",
      posted: "1 day ago",
      post: "JavaScript Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      id: 10,
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14eOsjowJauOK4Ecxnwp7mxym4p4EcEnmkfJaUz0AVw&s=10",
      company: "OpenAI",
      posted: "3 weeks ago",
      post: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "San Francisco, USA",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((job) => (
        <Card
          key={job.id}
          comp={job.company}
          post={job.post}
          dateposted={job.posted}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          brandlogo={job.brandLogo}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default App;