import { useState } from 'react';
import Header from '../components/Header';

const CafeGallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  
  // Sample gallery images - replace with your actual images
  const galleryImages = [
    { id: 1, src: '/images/coffee1.png', alt: 'Artisan coffee cup', category: 'coffee' },
    { id: 2, src: '/images/cafeinterior.png', alt: 'Cafe interior', category: 'interior' },
    { id: 3, src: '/images/pestries.png', alt: 'Fresh pastries', category: 'food' },
    { id: 4, src: '/images/latteart.png', alt: 'Latte art', category: 'coffee' },
    { id: 5, src: '/images/cozyarea.png', alt: 'Cozy seating area', category: 'interior' },
    { id: 6, src: '/images/breakfast.png', alt: 'Breakfast plate', category: 'food' },
    { id: 7, src: '/images/beans.png', alt: 'Coffee beans', category: 'coffee' },
    { id: 8, src: '/images/outdoor.png', alt: 'Outdoor seating', category: 'interior' },
  ];

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  const [currentCategory, setCurrentCategory] = useState('all');

  const filteredImages = currentCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory);

  return (
    <div>

     <Header/>
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual journey through the Jojolapa experience
          </p>
          <div className="w-24 h-1 bg-orange-300 mx-auto mt-4"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                currentCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setActiveImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}>
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute top-4 right-4 text-white text-3xl z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(null);
                }}
              >
                &times;
              </button>
              <img
                src={filteredImages[activeImage].src}
                alt={filteredImages[activeImage].alt}
                className="w-full max-h-screen object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                {filteredImages[activeImage].alt}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </div>
  );
};

export default CafeGallery;