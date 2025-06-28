const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-gray-100 p-6 rounded shadow">
          <p>"Great service, on-time, and very professional!"</p>
          <div className="font-bold mt-2">– Rajeev</div>
        </div>
        <div className="bg-gray-100 p-6 rounded shadow">
          <p>"Affordable and quick. My AC is working perfectly now."</p>
          <div className="font-bold mt-2">– Anita</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
