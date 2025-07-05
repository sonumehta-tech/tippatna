"use client"
import Form from "@/Components/Form";
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
      <div className="absulute w-full shadow">
        <Image className="relative md:h-[40vh] h-[20vh] w-full" src="/images/contactbg.png" width={900} height={200} alt="/" />
      </div>
      <div className="py-10 px-4 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
             <Form/>
          </div>
          <div className="w-full p-4">
            <iframe
              className="h-90 md:h-[80vh] w-full rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.184793674764!2d77.73698617523385!3d12.952888759631673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0d8e9801ea41%3A0x4854e49b71814061!2sMidtown%20Opulent!5e0!3m2!1sen!2sin!4v1750069840440!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
  );
};

export default Page;
