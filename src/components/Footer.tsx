import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Scale, Send, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-secondary">Abonnez-vous à notre Newsletter</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            La newsletter est un bulletin périodique par lequel le Cabinet Lakhoua informe ses clients, 
            partenaires et/ou employés de ses événements et des actualités du marché, et fournit un espace 
            pour vos analyses sur les tendances, la jurisprudence...
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
              value="Cet utilisateur s’est abonné à la newsletter." 
            />
          
            <Input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-secondary"
            />
          
            <Button 
              type="submit"
              variant="secondary"
              className="flex items-center space-x-2"
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
              <span className="text-xl font-bold">Cabinet Juridique</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Votre cabinet d'avocat de confiance, spécialisé dans le droit des affaires, 
              le droit civil et le conseil juridique. Plus de 20 ans d'expérience à votre service.
            </p>
            <div className="flex items-center space-x-2 text-secondary">
              <Scale className="w-5 h-5" />
              <span className="font-semibold">Justice • Expertise • Confiance</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact</h3>
            <div className="space-y-3">
               <div className="flex items-start space-x-3">
                 <MapPin className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
                 <span className="text-sm text-primary-foreground/80">
                   13, rue docteur Calmette<br />
                   Mutuelleville, Tunis 1082
                 </span>
               </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-sm text-primary-foreground/80">71 78 39 39</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-sm text-primary-foreground/80">71 78 30 82</span>
              </div>
               <div className="flex items-center space-x-3">
                 <Mail className="w-5 h-5 text-secondary" />
                 <span className="text-sm text-primary-foreground/80">abbes.lakhoua@gmail.com</span>
               </div>
               <div className="flex items-center space-x-3">
                 <Mail className="w-5 h-5 text-secondary" />
                 <span className="text-sm text-primary-foreground/80">contact@cabinetlakhoua.tn</span>
               </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm text-primary-foreground/80">Lun - Ven: 9h - 18h</span>
              </div>
              <div className="text-sm text-primary-foreground/80 ml-6">
                Samedi: 9h - 12h
              </div>
              <div className="text-sm text-primary-foreground/80 ml-6">
                Dimanche: Fermé
              </div>
              <div className="mt-3 p-2 bg-primary-light/20 rounded text-xs text-primary-foreground/90">
                Urgences: 24h/24 - 7j/7
              </div>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Suivez-nous</h3>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/abbeslakhoua/?igsh=MWYzdzJydTRic21jZw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Instagram className="w-5 h-5 text-secondary" />
                <span className="text-sm">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/lakhoua.abbes?mibextid=LQQJ4d&rdid=DowHejVj4WYG7PLF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16yyHBDSSD%2F%3Fmibextid%3DLQQJ4d#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Facebook className="w-5 h-5 text-secondary" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Cabinet Juridique. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <Link 
                to="/contact" 
                className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                Mentions légales
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
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