import { useState } from 'react'
import { motion } from 'framer-motion'
import useAnimateOnScroll, { fadeInUpVariants, staggerChildrenVariants, scaleInVariants } from '../hooks/useAnimateOnScroll'

function Services() {
  // Track which service card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Set up scroll animations for the whole section and the grid
  const { ref: sectionRef, controls: sectionControls, inView: sectionInView } = useAnimateOnScroll(0.1)
  const { ref: gridRef, controls: gridControls, inView: gridInView } = useAnimateOnScroll(0.15)

  // List of all services with their details
  const services = [
    {
      title: 'Data Pipeline Development',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      description: 'End-to-end ETL pipelines using Azure Data Factory, Databricks, and modern data tools.',
      gradient: 'from-[#0078D4] to-[#002050]'
    },
    {
      title: 'Data Analytics',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      description: 'Advanced analytics solutions using Power BI, Azure Synapse Analytics, and ML tools.',
      gradient: 'from-[#002050] to-[#0078D4]'
    },
    {
      title: 'Data Architecture',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      description: 'Design and implementation of scalable data architectures on Azure cloud.',
      gradient: 'from-[#0078D4] to-[#002050]'
    },
    {
      title: 'Full Stack Development',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      description: 'MERN stack applications with integrated data processing capabilities.',
      gradient: 'from-[#002050] to-[#0078D4]'
    },
    {
      title: 'Data Governance',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      description: 'Implement robust data governance frameworks and security measures.',
      gradient: 'from-[#0078D4] to-[#002050]'
    },
    {
      title: 'Cloud Migration',
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      description: 'Seamless migration of data workloads to Azure cloud infrastructure.',
      gradient: 'from-[#002050] to-[#0078D4]'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#1A1A1A] overflow-hidden"
    >
      {/* Moving dots background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={sectionInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        key={`bg-${sectionInView}`}
      >
        {/* Dots pattern that moves across the screen */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #6DBE45 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Title and subtitle that fade in when scrolled into view */}
        <motion.div 
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="mb-20 text-center"
          key={`header-${sectionInView}`}
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="mb-6 text-5xl font-bold text-white lg:text-6xl"
          >
            Our <span className="text-[#6DBE45]">Services</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="max-w-3xl mx-auto text-xl text-white/70"
          >
            Transforming ideas into digital reality with our comprehensive suite of services
          </motion.p>
        </motion.div>

        {/* Grid of service cards */}
        <motion.div 
          ref={gridRef}
          variants={staggerChildrenVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          key={`grid-${gridInView}`}
        >
          {/* Map through each service to create cards */}
          {services.map((service, index) => (
            <motion.div
              key={`${service.title}-${gridInView}`}
              className="relative group"
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 50,
                  scale: 0.9 
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Each service card */}
              <motion.div 
                className="relative h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm
                  border border-white/10 overflow-hidden transition-all duration-300
                  group-hover:border-[#6DBE45]/50"
                whileHover={{ 
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }
                }}
              >
                {/* Green gradient that shows on hover */}
                <motion.div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300
                    bg-gradient-to-br ${service.gradient}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ 
                    scale: 1,
                    opacity: 0.05,
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Service icon that spins on hover */}
                <motion.div 
                  className="relative w-16 h-16 mb-8 rounded-xl bg-[#6DBE45]/10 
                    flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                >
                  <motion.svg
                    className={`w-8 h-8 transition-colors duration-300
                      ${hoveredIndex === index ? 'text-[#6DBE45]' : 'text-white'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    whileHover={{ scale: 1.1 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </motion.svg>
                </motion.div>

                {/* Service title and description */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-[#6DBE45] transition-colors"
                  variants={fadeInUpVariants}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="mb-8 leading-relaxed text-white/70"
                  variants={fadeInUpVariants}
                >
                  {service.description}
                </motion.p>

                {/* Learn More button with arrow */}
                <motion.button
                  className="flex items-center gap-2 text-[#6DBE45] font-medium
                    group/btn relative overflow-hidden"
                  whileHover={{ 
                    x: 5,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                >
                  <span>Learn More</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ 
                      x: 5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services 