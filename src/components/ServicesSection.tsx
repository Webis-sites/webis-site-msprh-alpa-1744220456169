'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaPaintBrush, FaSprayCan, FaMagic, FaClock, FaShekelSign } from 'react-icons/fa';
import Image from 'next/image';
import clsx from 'clsx';

type ServiceCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in minutes
  image: string;
  categoryId: string;
};

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: ServiceCategory[] = [
    { id: 'all', name: 'הכל', icon: <FaMagic /> },
    { id: 'haircuts', name: 'תספורות', icon: <FaCut /> },
    { id: 'coloring', name: 'צביעות', icon: <FaPaintBrush /> },
    { id: 'styling', name: 'עיצוב', icon: <FaSprayCan /> },
    { id: 'treatments', name: 'טיפולים', icon: <FaMagic /> },
  ];

  const services: Service[] = [
    {
      id: '1',
      name: 'תספורת גברים',
      description: 'תספורת מקצועית לגברים כולל שטיפה ועיצוב',
      price: 80,
      duration: 30,
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1',
      categoryId: 'haircuts',
    },
    {
      id: '2',
      name: 'תספורת נשים',
      description: 'תספורת מקצועית לנשים כולל שטיפה ועיצוב',
      price: 120,
      duration: 45,
      image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803',
      categoryId: 'haircuts',
    },
    {
      id: '3',
      name: 'צבע שיער מלא',
      description: 'צביעת שיער מקצועית בכל גוון לבחירתך',
      price: 200,
      duration: 90,
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df',
      categoryId: 'coloring',
    },
    {
      id: '4',
      name: 'הבהרת שיער',
      description: 'הבהרת שיער מקצועית עם מינימום נזק',
      price: 250,
      duration: 120,
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486',
      categoryId: 'coloring',
    },
    {
      id: '5',
      name: 'פן מעוצב',
      description: 'פן מקצועי לכל אורך שיער',
      price: 90,
      duration: 40,
      image: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143',
      categoryId: 'styling',
    },
    {
      id: '6',
      name: 'תסרוקת ערב',
      description: 'תסרוקת מעוצבת לאירועים מיוחדים',
      price: 180,
      duration: 60,
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1',
      categoryId: 'styling',
    },
    {
      id: '7',
      name: 'טיפול קרטין',
      description: 'טיפול קרטין להחלקת השיער והענקת ברק',
      price: 350,
      duration: 150,
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f',
      categoryId: 'treatments',
    },
    {
      id: '8',
      name: 'מסכת שיער עמוקה',
      description: 'מסכה מזינה לשיקום שיער פגום',
      price: 120,
      duration: 45,
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15',
      categoryId: 'treatments',
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.categoryId === activeCategory);

  const handleBooking = (serviceId: string) => {
    console.log(`Booking service with ID: ${serviceId}`);
    // Here you would integrate with your booking system
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold mb-4 text-primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            במספרה אלפא אנו מציעים מגוון רחב של שירותים מקצועיים לטיפוח השיער שלך
          </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={clsx(
                "glass-button flex items-center gap-2 px-6 py-3 rounded-full text-lg font-medium transition-all",
                activeCategory === category.id
                  ? "neumorphic-active text-primary"
                  : "neumorphic-default text-gray-600 dark:text-gray-300 hover:text-primary"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              className="glass-card rounded-3xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-1 text-gray-700 dark:text-gray-200">
                    <FaClock className="text-secondary" />
                    <span>{service.duration} דקות</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-lg">
                    <FaShekelSign className="text-secondary" />
                    <span>{service.price}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleBooking(service.id)}
                  className="neumorphic-button w-full py-3 rounded-xl text-white bg-primary hover:bg-opacity-90 transition-all duration-300 font-medium"
                >
                  הזמן תור
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;