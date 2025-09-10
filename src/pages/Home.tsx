import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Users, FileText, Shield, Star, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-law-office.jpg';

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: <Scale className="w-8 h-8 text-secondary" />,
      title: "Droit des Affaires",
      description: "Conseil et accompagnement juridique pour entreprises, contrats commerciaux, fusions-acquisitions."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Droit Civil",
      description: "Droit de la famille, succession, immobilier, responsabilité civile et contentieux."
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Conseil Juridique",
      description: "Consultation personnalisée, rédaction d'actes, audit juridique et prévention des risques."
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Défense Pénale",
      description: "Représentation devant les tribunaux pénaux, assistance lors des gardes à vue."
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Dirigeante d'entreprise",
      content: "Un accompagnement exceptionnel dans la restructuration de mon entreprise. Professionnalisme et efficacité."
    },
    {
      name: "Pierre Martin",
      role: "Particulier",
      content: "Excellent conseil en droit immobilier. Une expertise reconnue et une approche humaine remarquable."
    },
    {
      name: "Sophie Laurent",
      role: "Entrepreneur",
      content: "Grâce à leur expertise en droit des affaires, j'ai pu sécuriser mes investissements en toute confiance."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(33, 58, 138, 0.8), rgba(33, 58, 138, 0.6)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Votre <span className="gold-text">Avocat</span> de Confiance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Excellence juridique, expertise reconnue et accompagnement personnalisé 
              pour défendre vos droits et vos intérêts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="hero-button text-lg px-10 py-6">
                  Consultation Gratuite
                </Button>
              </Link>
              <Link to="/about">
                <Button className="outline-button text-lg px-10 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Découvrir le Cabinet
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une expertise juridique complète pour répondre à tous vos besoins, 
              particuliers comme professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="elegant-card hover-lift fade-in-up border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-secondary/10">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                Pourquoi Nous Choisir ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">20+ Ans d'Expérience</h3>
                    <p className="text-muted-foreground">
                      Une expertise reconnue et une connaissance approfondie du droit français.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Approche Personnalisée</h3>
                    <p className="text-muted-foreground">
                      Chaque dossier est unique. Nous adaptons notre stratégie à vos besoins spécifiques.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Résultats Garantis</h3>
                    <p className="text-muted-foreground">
                      Un taux de réussite exceptionnel grâce à notre rigueur et notre détermination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in-up">
              <div className="bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Consultation Gratuite</h3>
                <p className="mb-6 text-white/90">
                  Bénéficiez d'un premier entretien gratuit de 30 minutes pour évaluer votre situation 
                  et définir la meilleure stratégie juridique.
                </p>
                <Link to="/contact">
                  <Button className="hero-button bg-white text-primary hover:bg-white/90">
                    Prendre Rendez-vous
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Témoignages Clients
            </h2>
            <p className="text-lg text-muted-foreground">
              La satisfaction de nos clients est notre plus belle récompense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="elegant-card hover-lift fade-in-up border-0"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-secondary mb-4" />
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;