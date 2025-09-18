import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Scale, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-yellow-600">Abonnez-vous à notre Newsletter</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Restez informé des dernières actualités juridiques et des évolutions du cabinet 
            grâce à notre newsletter mensuelle.
          </p>
          <form 
            action="https://formsubmit.co/contact@cabinetlakhoua.tn" 
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="_subject" value="Nouvelle inscription à la Newsletter" />
            <input type="hidden" name="_language" value="fr" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
          
            {/* Message statique */}
            <input 
              type="hidden" 
              name="message" 
              value="Cet utilisateur s'est abonné à la newsletter." 
            />
          
            <Input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
              className="flex-1 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-600"
            />
          
            <Button 
              type="submit"
              className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold flex items-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>S'abonner</span>
            </Button>
          </form>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8">
                <img src={logo} alt="Cabinet d'Avocat" className="w-full h-full object-contain brightness-0 invert drop-shadow-sm" />
              </div>
              <span className="text-xl font-bold text-white">Cabinet Lakhoua</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Votre cabinet d'avocat de confiance, spécialisé dans le droit des affaires, 
              le droit civil et le conseil juridique. Expertise moderne et approche personnalisée.
            </p>
            <div className="flex items-center space-x-2 text-yellow-600">
              <Scale className="w-5 h-5" />
              <span className="font-semibold">Justice • Expertise • Confiance</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-yellow-600 flex-shrink-0" />
                <span className="text-sm text-white/80">
                  13, rue docteur Calmette<br />
                  Mutuelleville, Tunis 1082
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-600" />
                <span className="text-sm text-white/80">71 78 39 39</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-600" />
                <span className="text-sm text-white/80">71 78 30 82</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-600" />
                <span className="text-sm text-white/80">abbes.lakhoua@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-600" />
                <span className="text-sm text-white/80">contact@cabinetlakhoua.tn</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-white/80">Lun - Ven: 9h - 18h</span>
              </div>
              <div className="text-sm text-white/80 ml-6">
                Samedi: 9h - 12h
              </div>
              <div className="text-sm text-white/80 ml-6">
                Dimanche: Fermé
              </div>
              <div className="mt-3 p-2 bg-yellow-600/20 rounded text-xs text-white/90">
                Urgences: 24h/24 - 7j/7
              </div>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-600">Suivez-nous</h3>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/abbeslakhoua/?igsh=MWYzdzJydTRic21jZw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-yellow-600 transition-colors"
              >
                <Instagram className="w-5 h-5 text-yellow-600" />
                <span className="text-sm">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/lakhoua.abbes?mibextid=LQQJ4d&rdid=DowHejVj4WYG7PLF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16yyHBDSSD%2F%3Fmibextid%3DLQQJ4d#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-yellow-600 transition-colors"
              >
                <Facebook className="w-5 h-5 text-yellow-600" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2024 Cabinet Lakhoua. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <Link 
                to="/contact" 
                className="text-sm text-white/80 hover:text-yellow-600 transition-colors"
              >
                Mentions légales
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-white/80 hover:text-yellow-600 transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;