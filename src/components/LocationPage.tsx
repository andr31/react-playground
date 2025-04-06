import React from 'react';
import { Helmet } from 'react-helmet-async';
import PhotoCard from './PhotoCard';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faBriefcase,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

interface LocationPageProps {
  area: string;
}

const LocationPage: React.FC<LocationPageProps> = ({ area }) => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>
          Professional Photographer in {area} | Cristina Batrincea Photography
        </title>
        <meta
          name="description"
          content={`Professional photography services in ${area}, FL. Family portraits, branding photography, and maternity sessions. Serving the ${area} area with creative and authentic photography.`}
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-[#e8e8e1] py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
              <h1 className="font-montez text-5xl mb-8">
                Professional Photography in {area}
              </h1>
              <p className="font-inter text-lg mb-6 leading-relaxed">
                Looking for a professional photographer in {area}? Cristina
                Batrincea Photography specializes in capturing beautiful moments
                through family portraits, branding photography, and maternity
                sessions.
              </p>
              <button
                onClick={() => {
                  {
                    if (location.pathname !== '/') {
                      // Navigate to the homepage and scroll to the "contact" section
                      navigate('/', { state: { scrollTo: 'contact' } });
                    }
                  }
                }}
                className="px-10 py-6 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                BOOK A SESSION
              </button>
            </div>

            {/* Image Section */}
            <div className="hidden lg:block">
              <PhotoCard
                src="/static/images/Luna.jpg"
                label={`${area} Photography`}
                autoHeight={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 bg-[#e8e8e1]">
        <ServiceCard
          title="Family Portraits"
          description="Capture precious family moments in beautiful outdoor settings around the Tampa Bay area."
          type="family"
        />
        <ServiceCard
          title="Branding Photography"
          description="Elevate your business with professional branding photos that tell your story."
          type="branding"
        />
        <ServiceCard
          title="Maternity Sessions"
          description="Document your journey into motherhood with elegant maternity photography."
          type="maternity"
        />
      </div>

      {/* Location Specific Content */}
      <div className="bg-[#e8e8e1] py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-montez text-4xl text-center mb-8">
            Why Choose a Local {area} Photographer?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-inter text-lg mb-6 leading-relaxed">
              As a {area}-based photographer, I know the most picturesque
              locations and the best times for outdoor photography in our area.
              From beautiful parks to urban settings, we'll find the perfect
              backdrop for your photos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Service Card Component
const ServiceCard: React.FC<{
  title: string;
  description: string;
  type: 'family' | 'branding' | 'maternity';
}> = ({ title, description, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'family':
        return faUsers;
      case 'branding':
        return faBriefcase;
      case 'maternity':
        return faHeart;
    }
  };

  return (
    <div className="bg-[#dbccc3] p-8 rounded-lg">
      <div className="flex flex-col items-center text-center">
        <FontAwesomeIcon
          icon={getIcon()}
          className="text-6xl mb-6 text-[#ac440c]"
        />
        <h3 className="font-montez text-4xl mb-4">{title}</h3>
        <p className="font-inter text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default LocationPage;
