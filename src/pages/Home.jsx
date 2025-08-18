import featuredCoffees from "../components/Featured";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="bg-[url('/images/home-page-background.jpg')] bg-cover bg-center h-[70vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className='text-5xl md:text-6xl font-bold text-orange-300 mb-6 drop-shadow-lg'>
            Welcome to <span className="text-white">Jojolapa</span>
          </h1>
          <p className='text-2xl text-orange-200 font-light italic drop-shadow-md'>
            Experience the perfect blend of creativity
          </p>
        </div>
      </section>

      {/* Featured Favorites */}
      <section className='py-16 px-4 text-center max-w-7xl mx-auto w-full'>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Favorites</h2>
          <p className="text-gray-600 mb-8">Experience the art of coffee with modern ease.</p>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {featuredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={coffee.image}
                alt={coffee.name}
                className='h-60 w-full object-cover mb-4 rounded-lg'
              />
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {coffee.name}
              </h3>
              <p className='text-gray-600 mb-4'>{coffee.description}</p>
              <span className="text-amber-700 font-medium">{coffee.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Section */}
      <section className="bg-amber-100 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Jojolapa</h2>
          <p className="text-xl text-gray-700 mb-8">
            Award your own brand in a new fashion. Make sure you can use your own brand in a new fashion.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-20 px-4 text-center">
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
      <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote: "Best coffee I've ever had! The atmosphere is amazing!",
          name: "Abhishek Rai",
          role: "Regular Customer",
          rating: 5
        },
        {
          quote: "Worth every penny! I come here every morning.",
          name: "Rukesh Maharjan",
          role: "Coffee Enthusiast",
          rating: 4
        },
        {
          quote: "The perfect place to work and enjoy great coffee.",
          name: "Kabir Shakya",
          role: "Regular Customer",
          rating: 5
        }
      ].map((testimonial, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic mb-6 text-lg">
            "{testimonial.quote}"
          </p>
          <div className="text-gray-800 font-medium">{testimonial.name}</div>
          <div className="text-gray-500 text-sm">{testimonial.role}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-24 px-4 text-center bg-[url('/images/cta-background.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Jojolapa?
          </h2>
          <p className="text-xl text-orange-200 mb-8">
            Just how much is it about customers around this age when you want to be able to make their own products better?
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Explore Our Menu
          </button>
        </div>
      </section>
      
      {/* Footer */}
        <Footer/>
    </div>
  );
};

export default Home;
