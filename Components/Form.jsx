"use client"
import { useState } from "react";
const Form = () => {

  const services = [
    { title: "1. AC, Fridge, Deep Freezer, Water Cooler etc. price:-15,999" },
    { title: "2. Washing Machine, RO, Geyser, Micro Oven etc price:-10,999)"},
    { title: "3. House Wiring (Basic to Advanced)Includes etc price:-10,999" },
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
      <div className="w-full p-3 md:p-5">
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
                <option className="text-zinc-950 max-w-4xl" key={i} value={s.title}>{s.title}</option>
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
            className="bg-gray-800 hover:bg-gray-800 text-white px-4 py-2 rounded w-full"
          >
            Submit on WhatsApp
          </button>
        </form>

      </div>
  );
};

export default Form;
