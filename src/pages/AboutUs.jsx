import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[url('/images/bgabout.png')] bg-cover bg-center h-[70vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className='text-5xl md:text-6xl font-bold text-orange-300 mb-6 drop-shadow-lg'>
            About Jojolapa
          </h1>
          <p className='text-2xl text-orange-200 font-light italic drop-shadow-md'>
            Where passion meets every cup
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-orange-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">From Humble Beginnings</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2010 as a small neighborhood coffee cart, Jojolapa has grown into 
              a beloved community hub while maintaining our commitment to craft and quality. 
              What began as a passion project between friends is now a thriving local institution 
              that still roasts our beans in-house daily.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src="/images/cafeinterior.png" 
              alt="Jojolapa Cafe Interior" 
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-orange-300 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Passion for Coffee",
                description: "Every cup is crafted with care using specialty grade beans and precise brewing techniques.",
                icon: "☕"
              },
              {
                title: "Community First",
                description: "We're committed to building connections and creating a welcoming space for everyone.",
                icon: "👥"
              },
              {
                title: "Sustainability",
                description: "Ethically sourced beans and eco-friendly practices in everything we do.",
                icon: "🌱"
              },
              {
                title: "Quality Excellence",
                description: "Dedicated to serving only the highest quality beverages and food.",
                icon: "✨"
              }
            ].map((value, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            The passionate people behind your perfect cup
          </p>
          <div className="w-24 h-1 bg-orange-300 mx-auto mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Aryan Maharjan",
              role: "Head Barista",
              bio: "6 years of specialty coffee experience",
              initials: "AM"
            },
            {
              name: "Abhishek Rai",
              role: "Coffee Roaster",
              bio: "Master roaster with 12 years experience",
              initials: "AR"
            },
            {
              name: "Rukesh Maharjan",
              role: "Cafe Manager",
              bio: "Creating welcoming experiences since 2015",
              initials: "RM"
            },
            {
              name: "Kabir Shakya",
              role: "Pastry Chef",
              bio: "Award-winning artisan baker",
              initials: "KS"
            }
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl font-bold mx-auto mb-4">
                {member.initials}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-orange-500 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

           {/* Call to Action */}
      <section className="py-24 px-4 text-center bg-[url('/images/cta-background.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-orange-200 mb-8">
            To create exceptional coffee experiences that bring people together, support our community,
            and inspire great great moments every day.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Join Our Community
          </button>
        </div>
      </section>
      
          <Footer/>

    </div>
  );
};

export default AboutUs;