"use client"
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
import Form from './Form';
import Image from 'next/image';

const Home = () => {

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "100% Practical + Theory",
      description: "Hands-on training with theoretical knowledge for complete understanding"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificate Provided",
      description: "Industry-recognized certification upon course completion"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Business Guidance",
      description: "Learn how to start and grow your own repair business"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Hostel Facilities",
      description: "Comfortable accommodation available for outstation students"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      course: "AC & Refrigeration",
      content: "Excellent training with practical approach. Now I'm running my own AC repair business successfully.",
      rating: 5,
      location: "Patna"
    },
    {
      name: "Amit Singh",
      course: "House Wiring",
      content: "Best institute for electrical training. Teachers are very supportive and knowledgeable.",
      rating: 5,
      location: "Danapur"
    },
    {
      name: "Sunil Yadav",
      course: "Home Appliances",
      content: "Great experience learning washing machine and RO repair. Got job immediately after completion.",
      rating: 5,
      location: "Khagaul"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Master Technical Skills at
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-orange-300"> Patna's Premier Institute</span>
              </h1>
              <p className="text-xl lg:text-2xl text-orange-100 mb-8 leading-relaxed">
                Learn AC, Refrigeration, Home Appliances & Electrical Wiring with 100% practical training and guaranteed job placement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg">
                  Start Learning Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-900 transition-all">
                  View Courses
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-300">100%</div>
                  <div className="text-orange-200">Practical Training</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-300">500+</div>
                  <div className="text-orange-200">Students Trained</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">📍 Visit Our Institute</h3>
                <div className="space-y-4 text-orange-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-300 mt-1" />
                    <div>
                      <div className="font-semibold">Address:</div>
                      <div>Lakhni Bigha, Khagaul</div>
                      <div>Patna, Bihar</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <div>
                      <div>📞 8292236605</div>
                      <div>📞 9905194344</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-3">Why Choose Us?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>100% Practical + Theory</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Certificate Provided</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Business Guidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Hostel Facilities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">✅ Training Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to ensure your success in the technical field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors">
                <div className="p-4 bg-orange-100 rounded-xl inline-block mb-4 text-orange-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Technical Training Institute in Patna
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are committed to providing high-quality technical education in AC repair, home appliances, and electrical work. Our experienced instructors and modern facilities ensure you get the best practical training.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="p-4 bg-orange-100 rounded-xl inline-block mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-green-100 rounded-xl inline-block mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-gray-600">Job Placement</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Certified Training</h4>
                    <p className="text-gray-600">Industry-recognized certification upon completion</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Practical Focus</h4>
                    <p className="text-gray-600">100% hands-on training with real equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Career Growth</h4>
                    <p className="text-gray-600">Business guidance and job placement support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image 
                  src="/images/ro.webp"
                  width={200}
                  height={100}
                  alt="AC repair training" 
                  className="w-full h-48 object-cover rounded-xl"
                />
                <Image 
                src="/images/washing.jpg"
                  width={200}
                  height={100}
                  alt="Electrical training" 
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image 
                src="/images/wcooler.jpeg"
                  width={200}
                  height={100}
                  alt="Appliance repair" 
                  className="w-full h-32 object-cover rounded-xl"
                />
                <Image 
                src="/images/gyser.jpg"
                  width={200}
                  height={100}
                  alt="Technical workshop" 
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have successfully started their careers in technical fields.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-orange-600">{testimonial.course}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Technical Career?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today to learn more about our courses and start your journey towards a successful technical career.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">📞 Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-700 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">🏫 Institute Address</h4>
                    <p className="text-gray-300 text-lg">Lakhni Bigha, Khagaul</p>
                    <p className="text-gray-300 text-lg">Patna, Bihar</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-700 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">📞 Call Us</h4>
                    <p className="text-gray-300 text-lg">8292236605</p>
                    <p className="text-gray-300 text-lg">9905194344</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">🕒 Visit Timings</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-2 md:p-8">
              <h3 className="text-2xl font-bold mb-6">📝 Enquiry Form</h3>
               <Form/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;