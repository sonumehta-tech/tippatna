import Image from "next/image";
const page = () => {
  return (
    <>
      <section className=" bg-gray-50 text-gray-800">
        <div className="w-[100%] ">
            <Image className="md:h-[40vh] h-[25vh" src="/images/about.png" width={1200} height={200} alt="about" />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 mt-5">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-700">About Technical Institute Patna</h2>
            <p className="text-lg leading-relaxed mb-4">
              Technical Institute Patna is one of the most trusted and leading training centers for practical
              repair and service education. We provide 100% hands-on learning experiences in AC repairing, washing machine servicing, RO systems, geysers, refrigerators, motor winding, and house wiring.
            </p>
            <p className="text-base text-gray-700 mb-4">
              Our mission is to equip students with industry-relevant skills and help them build rewarding
              careers in technical fields. With experienced trainers and real-world practice, we ensure students gain both knowledge and confidence.
            </p>
            <p className="text-base text-gray-700">
              Whether you're looking to start your own business or get a job in the service sector, our certified training can help you achieve your goals.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/certificate.png" // <-- Replace with your certificate image path
                alt="Institute Certificate"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">Our Government-Recognized Certificate</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50 text-gray-800">
      
        {/* My Certification Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-10">My Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { src: "/images/certificate.png", title: "AC Repair Certificate" },
              { src: "/images/certificate2.png", title: "Washing Machine Repair" },
              { src: "/images/certificate.png", title: "Motor Winding Training" }
            ].map((cert, i) => (
              <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                <Image
                  src={cert.src}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-700">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  );
};

export default page;
