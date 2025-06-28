'use client';
import { useState } from "react";
import Image from "next/image";

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
    <section className="py-16 px-6 text-center">
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
              className="bg-orange-800 text-white mb-5 px-3 py-1 rounded hover:bg-orange-700 transition"
            >
              Book Now
            </button>
          </div>
        ))}
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
            <h2 className="text-xl font-bold mb-4">Book Course: {selectedCourse}</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;

                const name = form.name.value;
                const phone = form.phone.value;
                const course = form.course.value;
                const address = form.address.value;

                // WhatsApp message formatting
                const message = `Name: ${name}\nPhone: ${phone}\nCourse: ${course}\nAddress: ${address}`;
                const encodedMessage = encodeURIComponent(message);
                const phoneNumber = "918292236605";

                // Open WhatsApp in new tab
                const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                window.open(url, "_blank");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-left font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border px-4 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-left font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your number"
                  className="w-full border px-4 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-left font-medium mb-1">Select Course</label>
                <select
                  name="course"
                  required
                  defaultValue={selectedCourse}
                  className="w-full border px-4 py-2 rounded"
                >
                  {services.map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-left font-medium mb-1">Address</label>
                <textarea
                  name="address"
                  required
                  placeholder="Enter your address"
                  className="w-full border px-4 py-2 rounded"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded w-full"
              >
                Submit on WhatsApp
              </button>
            </form>


          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
