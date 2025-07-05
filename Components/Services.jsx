'use client';
import { useState } from "react";
import Image from "next/image";
import Form from "./Form";
import { 
  Wrench,  
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  Star,
  Award,
  Users,
  BookOpen,
  Clock,
  IndianRupee,
  Refrigerator,
  WashingMachine,
  Lightbulb,
  GraduationCap,
  Building,
  Shield,
  Target,
  TrendingUp
} from 'lucide-react';
const courses = [
    {
      id: 1,
      title: "AC, Fridge, Deep Freezer, Water Cooler (Inverter & Non-Inverter) Digital Inverter, Dual Inverter, Smart Inverter etc.",
      subtitle: "Digital Inverter, Dual Inverter, Smart Inverter",
      duration: "3-4 months",
      level: "Basic + Advanced",
      icon: <Refrigerator className="w-8 h-8" />,
      description: "Complete training on refrigeration systems including inverter and non-inverter types. Learn repair and maintenance of all cooling appliances.",
      topics: ["AC Repair & Installation", "Refrigerator Servicing", "Deep Freezer Maintenance", "Water Cooler Systems", "Digital Inverter Technology", "Smart Inverter Controls"],
      fee: "₹15,999",
      color: "blue"
    },
    {
      id: 2,
      title: "Washing Machine, RO, Geyser, Micro Oven, Cooler(Semi-Automatic, Automatic, Inverter & Non-Inv",
      subtitle: "Semi-Automatic, Automatic, Inverter Types",
      duration: "2-3 months",
      level: "Basic + Advanced",
      icon: <WashingMachine className="w-8 h-8" />,
      description: "Comprehensive training on home appliances including washing machines, water purifiers, geysers, and microwave ovens.",
      topics: ["Washing Machine Repair", "RO System Maintenance", "Geyser Installation", "Microwave Servicing", "Automatic Controls", "Inverter Technology"],
      fee: "₹10,999",
      color: "green"
    },
    {
      id: 3,
      title: "House Wiring (Basic to Advanced)Includes Board Wiring, Junction Wiring, Hostel & Hotel Wiring, Series Board, Panel Board, Remote Control System, and more",
      subtitle: "Basic to Advanced Electrical Work",
      duration: "2-3 months",
      level: "Basic + Advanced",
      icon: <Lightbulb className="w-8 h-8" />,
      description: "Complete electrical wiring course from basic house wiring to advanced commercial installations and control systems.",
      topics: ["Board Wiring", "Junction Wiring", "Hostel & Hotel Wiring", "Series Board Setup", "Panel Board Installation", "Remote Control Systems"],
      fee: "₹10,999",
      color: "orange"
    }
  ];
const services = [
  { title: "AC repaing course", src: "/images/acrepairing.webp", desc: "AC repairing courses teach installation, and repair of air conditioning systems practically." },
  { title: "Wasing machine reparing course", src: "/images/washing.jpg", desc: "Washing machine repairing courses teach and maintenance for top and front-load machines." },
  { title: "Gyser reparing course", src: "/images/gyser.jpg", desc: "Geyser repairing courses teach installation fault detection, and repair of electric and gas geysers." },
  { title: "Moter winding course", src: "/images/moter.jpg", desc: "Motor winding courses teach coil rewinding,  and motor repair for technical careers." },
  { title: "R.O repaire course", src: "/images/ro.webp", desc: "RO repair courses teach installation, maintenance, and troubleshooting of purifiers." },
  { title: "Water cooler repairing course", src: "/images/wcooler.jpeg", desc: "Learn water cooler repair: cooling system, wiring, motor, maintenance skills." },
  { title: "Deep freez repairing course", src: "/images/dfridse.jpg", desc: "Learn deep freezer repair: cooling systems, compressors, gas refilling, maintenance." },
  { title: "House wiring course", src: "/images/hwiring.png", desc: "Learn house wiring basics, safety, tools, circuits, and installation techniques." },
  { title: "Refrigerator repairing course", src: "/images/rfreezer.webp", desc: "Learn refrigerator repair skills: cooling systems, gas filling, troubleshooting." },
];

const Services = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openModal = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCourse("");
  };

  return (
    <section className="py-16 px-6 ">
      <h2 className="text-3xl font-bold mb-10">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg">
            <Image src={s.src} width={400} height={200} className="rounded-t-xl" alt="service" />
            <h3 className="text-xl font-semibold mt-4 px-3">{s.title}</h3>
            <p className="text-gray-600 m-2 px-3">{s.desc}</p>
            <button
              type="button"
              onClick={() => openModal(s.title)}
              className="bg-orange-800 text-center  ms-20 text-white mb-5 px-3 py-1 rounded hover:cursor-pointer hover:bg-orange-700 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

       {/* MoreCourses Section */}
      <div id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Our Training Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional technical training courses designed to make you job-ready with hands-on practical experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 bg-${course.color}-100 rounded-xl text-${course.color}-600`}>
                      {course.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600 flex items-center">
                        <IndianRupee className="w-5 h-5" />
                        {course.fee.replace('₹', '')}
                      </div>
                      <div className="text-sm text-gray-500">Course Fee</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-orange-600 font-medium mb-4">{course.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
                    <div className="space-y-2">
                      {course.topics.map((topic, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                   onClick={() => openModal(course.title)}
                   className="w-full bg-orange-700 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 hover:cursor-pointer  transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Popup Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              ×
            </button>
           <Form/>
          </div>
        </div>
      )}
    </section>

    
  );
};

export default Services;
