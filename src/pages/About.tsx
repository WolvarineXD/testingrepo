
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-theme-black">
      <Header />
      <Navbar />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-8">About India Digital Vision</h1>
          
          <div className="bg-theme-darkGray rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-theme-orange mb-4">Our Mission</h2>
            <p className="text-white/80 mb-6">
              India Digital Vision aims to document, analyze, and showcase India's journey into becoming a digital superpower. 
              We provide comprehensive information on digital public goods and infrastructure initiatives that are 
              transforming India's governance, economy, healthcare, education, and civic life.
            </p>
            <p className="text-white/80">
              Our platform serves as an educational resource for citizens, researchers, policymakers, and global 
              observers interested in understanding India's digital transformation model and its impact on more than a 
              billion lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-theme-darkGray rounded-lg p-8">
              <h2 className="text-2xl font-bold text-theme-orange mb-4">Digital India Vision</h2>
              <p className="text-white/80">
                Digital India is a flagship program of the Government of India with a vision to transform 
                India into a digitally empowered society and knowledge economy. Launched in 2015, 
                this initiative focuses on three key areas:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-white/80">
                <li>Digital Infrastructure as a Core Utility for Every Citizen</li>
                <li>Governance and Services on Demand</li>
                <li>Digital Empowerment of Citizens</li>
              </ul>
            </div>
            
            <div className="bg-theme-darkGray rounded-lg p-8">
              <h2 className="text-2xl font-bold text-theme-orange mb-4">Principles of Digital Public Infrastructure</h2>
              <p className="text-white/80 mb-4">
                India's Digital Public Infrastructure is built on key principles that ensure its effectiveness and inclusivity:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Open APIs and interoperability</li>
                <li>Privacy by design</li>
                <li>Federated architecture</li>
                <li>Minimalist and inclusive approach</li>
                <li>Public-private partnerships</li>
                <li>Open-source development</li>
                <li>Data empowerment and protection</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-theme-darkGray rounded-lg p-8">
            <h2 className="text-2xl font-bold text-theme-orange mb-4">The Impact</h2>
            <p className="text-white/80 mb-4">
              India's digital transformation has had far-reaching impacts across multiple dimensions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-theme-gray p-5 rounded-lg">
                <h3 className="text-xl font-bold text-theme-orange mb-2">Financial Inclusion</h3>
                <p className="text-white/80">
                  Banking the unbanked through Digital Identity and UPI, creating pathways to formal financial services.
                </p>
              </div>
              <div className="bg-theme-gray p-5 rounded-lg">
                <h3 className="text-xl font-bold text-theme-orange mb-2">Government Service Delivery</h3>
                <p className="text-white/80">
                  Transforming citizen experience through digital service delivery, reducing corruption and improving efficiency.
                </p>
              </div>
              <div className="bg-theme-gray p-5 rounded-lg">
                <h3 className="text-xl font-bold text-theme-orange mb-2">Healthcare Access</h3>
                <p className="text-white/80">
                  Extending healthcare to remote areas through telemedicine and digital health records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
