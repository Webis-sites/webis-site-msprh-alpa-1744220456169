'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section 
      dir="rtl" 
      className={clsx(
        "relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200",
        className
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/salon-background.jpg"
          alt="מספרה אלפא רקע"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/80"></div>
      </div>

      {/* Glassmorphism Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[20%] right-[10%] h-64 w-64 rounded-full bg-primary/20 backdrop-blur-md"
        style={{
          boxShadow: '0 8px 32px 0 rgba(212, 165, 165, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-[15%] left-[15%] h-40 w-40 rounded-full bg-secondary/20 backdrop-blur-md"
        style={{
          boxShadow: '0 8px 32px 0 rgba(255, 107, 107, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}
      ></motion.div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="glassmorphism-card mx-auto max-w-3xl rounded-2xl bg-white/20 p-8 backdrop-blur-lg sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              מספרה מוביל בישראל
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 text-xl text-gray-700 sm:text-2xl"
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <button 
                className="neumorphic-button relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{
                  boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.7)'
                }}
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <motion.span 
                  className="absolute inset-0 z-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                ></motion.span>
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Salon Features */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'מעצבי שיער מנוסים', description: 'צוות מקצועי עם שנים של ניסיון' },
            { title: 'מוצרים איכותיים', description: 'שימוש במוצרי שיער מהמותגים המובילים' },
            { title: 'אווירה מפנקת', description: 'חלל מעוצב ואווירה נעימה' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
              className="neumorphic-card rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              style={{
                boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.05), -8px -8px 16px rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.18)'
              }}
            >
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;