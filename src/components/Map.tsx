import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface MapProps {
  isBackground?: boolean;
  height?: string;
  center?: [number, number];
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ 
  isBackground = false, 
  height = "h-96", 
  center = [10.1815, 36.8065], // Tunis, Tunisia coordinates
  zoom = 12 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [accessToken, setAccessToken] = useState<string>('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const handleTokenSubmit = () => {
    if (accessToken.trim()) {
      setIsTokenSet(true);
      initializeMap();
    }
  };

  const initializeMap = () => {
    if (!mapContainer.current || !accessToken) return;

    try {
      // Initialize map
      mapboxgl.accessToken = accessToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        zoom: zoom,
        center: center,
        interactive: !isBackground,
      });

      // Add marker for the law firm location
      new mapboxgl.Marker({ color: '#B8860B' }) // Gold color matching the theme
        .setLngLat(center)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3>Cabinet Lakhoua</h3><p>1, Rue saint Fulgence<br>Mutuelleville, Tunis 1082</p>')
        )
        .addTo(map.current);

      // Add navigation controls if not background
      if (!isBackground) {
        map.current.addControl(
          new mapboxgl.NavigationControl({
            visualizePitch: true,
          }),
          'top-right'
        );
      }

      // Disable scroll zoom for background maps
      if (isBackground) {
        map.current.scrollZoom.disable();
        map.current.doubleClickZoom.disable();
        map.current.dragPan.disable();
      }

    } catch (error) {
      console.error('Erreur lors de l\'initialisation de la carte:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className={`${height} bg-gradient-to-br from-primary/10 to-secondary/10 relative rounded-lg overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Configuration de la carte</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Pour afficher la carte interactive, veuillez saisir votre token Mapbox public. 
              Vous pouvez l'obtenir sur <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">mapbox.com</a>
            </p>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Entrez votre token Mapbox public..."
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
                className="text-sm"
              />
              <Button 
                onClick={handleTokenSubmit}
                className="hero-button w-full"
                disabled={!accessToken.trim()}
              >
                Charger la carte
              </Button>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <p><strong>1, Rue saint Fulgence</strong></p>
              <p>Mutuelleville, Tunis 1082</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${height} w-full`}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      {isBackground && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/30 rounded-lg" />
      )}
    </div>
  );
};

export default Map;