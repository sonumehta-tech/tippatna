"use client"
import Image from "next/image";
import { useState } from "react";
const Page = () => {

  const services = [
  { title: "AC repaing course"},
  { title: "Wasing machine reparing course" },
  { title: "Gyser reparing course" },
  { title: "Moter winding course" },
  { title: "R.O repaire course"},
  { title: "Water cooler repairing course"},
  { title: "Deep freez repairing course"},
  { title: "House wiring course"},
  { title: "Refrigerator repairing course"},
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
    <div>
      <div className="absulute w-full">
        <Image className="relative md:h-[40vh] h-[20vh] w-full" src="/images/contactbg.png" width={900} height={200} alt="/" />
      </div>
      <section className="py-10 px-4 mx-auto">
        <div className="flex flex-wrap">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-3 md:p-10">
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

          {/* Google Map */}
          <div className="w-full md:w-1/2 p-4">
            <iframe
              className="h-96 md:h-[100vh] w-full rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.184793674764!2d77.73698617523385!3d12.952888759631673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d8e9801ea41%3A0x4854e49b71814061!2sMidtown%20Opulent!5e0!3m2!1sen!2sin!4v1750069840440!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
