"use client"
import { useState } from "react";
import Image from "next/image";
const Contact = () => {

  const services = [
    { title: "AC repaing course" },
    { title: "Wasing machine reparing course" },
    { title: "Gyser reparing course" },
    { title: "Moter winding course" },
    { title: "R.O repaire course" },
    { title: "Water cooler repairing course" },
    { title: "Deep freez repairing course" },
    { title: "House wiring course" },
    { title: "Refrigerator repairing course" },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openModal = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCourse("");
  }
  return (
    <section id="contact" className="py-16 bg-orange-50 text-center">
      <h2 className="text-3xl font-bold mb-6 bg-orange-600">Contact Us</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 px-6">
        <div>
          <Image className="rounded-md" width={600} height={600}  src="/images/contact.png" alt="imge"/>
        </div>
        <div>
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

    </section>
  );
};

export default Contact;
