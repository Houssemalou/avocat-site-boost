import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface MapProps {
  isBackground?: boolean;
  height?: string;
}

const Map: React.FC<MapProps> = ({ 
  isBackground = false, 
  height = "h-96"
}) => {
  // Cabinet Lakhoua location coordinates
  const latitude = 36.8065;
  const longitude = 10.1815;
  const address = "13, rue docteur Calmette, Mutuelleville, Tunis 1082";

  const handleMapClick = () => {
    // Open Google Maps with the location
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div 
      className={`${height} bg-gradient-to-br from-yellow-600/20 via-black/80 to-yellow-800/20 relative rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group`}
      onClick={handleMapClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30"></div>
      
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-center text-white">
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-yellow-600/20 group-hover:bg-yellow-600/30 transition-colors duration-300 group-hover:scale-110 transform">
              <MapPin className="w-12 h-12 text-yellow-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-white">
            Cabinet Lakhoua
          </h3>
          
          <p className="text-white/90 mb-4 leading-relaxed">
            {address}
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-yellow-600 group-hover:text-yellow-500 transition-colors">
            <ExternalLink className="w-5 h-5" />
            <span className="font-semibold">Voir sur Google Maps</span>
          </div>
          
          <div className="mt-4 text-sm text-white/70">
            Cliquez pour ouvrir dans Google Maps
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-600 rounded-full opacity-60"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-yellow-600 rounded-full opacity-40"></div>
      <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-yellow-600 rounded-full opacity-50"></div>
    </div>
  );
};

export default Map;