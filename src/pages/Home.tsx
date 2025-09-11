import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scale, Users, FileText, Shield, Star, Quote, BookOpen, Award, Search, Target, Handshake } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import heroImage from '@/assets/cabinet-exterior.jpg';

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
      title: "DROIT DES AFFAIRES",
      description: "Le cabinet gère les litiges des entreprises, institutions et particuliers dans les domaines suivants:",
      details: [
        "Droit des contrats",
        "Recouvrement des créances et voies d'exécution",
        "Droit bancaire et financier",
        "Droit du cautionnement",
        "Droit de la concurrence, distribution et consommation",
        "Fusion acquisition (joint venture), scission, absorption",
        "Droit des entreprises en difficultés",
        "Propriété intellectuelle (Brevets, marques, dessins, modèles, droit d'auteur)",
        "Responsabilité civile industrielle",
        "Droit de l'informatique et des nouvelles technologies",
        "Droit pénal des affaires"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "DROIT IMMOBILIER",
      description: "Le cabinet assiste les professionnels et les particuliers lors de négociation, procédures et expertises en:",
      details: [
        "Droit de la construction (responsabilité civile, contractuelle, garanties légale)",
        "Ventes immobilières",
        "Copropriété",
        "Saisies immobilières"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "DROIT SOCIAL",
      description: "Le cabinet gère les litiges nés à l'occasion du contrat de travail:",
      details: [
        "Contentieux prud'homal",
        "Sécurité sociale",
        "Rédaction des contrats de travail",
        "Droit pénal du travail (accidents de travail)",
        "Audit social"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "DROIT CIVIL ET DE LA FAMILLE",
      description: "Le cabinet pratique conseils et contentieux dans les domaines suivants:",
      details: [
        "Droit des obligations (responsabilité contractuelle, délictuelle)",
        "Indivision",
        "Succession",
        "Filiation",
        "Nom, prénom",
        "Droit des mineurs"
      ]
    },
    {
      icon: <Scale className="w-8 h-8 text-secondary" />,
      title: "DROIT DES ASSURANCES",
      description: "Le cabinet gère le contentieux de la responsabilité dans les domaines suivants:",
      details: [
        "Accidents de la circulation",
        "Indemnisation des préjudices corporels",
        "Indemnisation des victimes d'infraction",
        "Incendie"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "DROIT FISCAL",
      description: "Le cabinet intervient dans le cadre des missions suivantes:",
      details: [
        "Consultations dans les domaines de fiscalité directe et indirecte des personnes physiques et morales",
        "Assistance en cas de contrôle fiscal",
        "Contentieux devant les différents tribunaux Tunisiens",
        "Responsabilité des sociétés étrangères ou d'expatriés auprès de l'administration fiscale Tunisienne"
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "ARBITRAGE",
      description: "Le cabinet représente et conseille ses clients dans les:",
      details: [
        "Arbitrages internes",
        "Arbitrages internationaux"
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "NOTARIAT",
      description: "Un échantillon de la compétence du cabinet dans le domaine notarial:",
      details: [
        "Entreprise: Vie de l'entreprise (constitution des sociétés, statuts), modification ou cession des parts sociales, acquisition de biens, crédit-bail immobilier",
        "Fond de commerce: achat et vente, rédaction de baux commerciaux, transmission de l'entreprise",
        "Immobilier: Rédaction de baux, achats et ventes, négociation, fiscalité immobilière",
        "Famille - Décès: Succession, partage, règlements successoraux",
        "Famille - Vie de famille: Adoption, donation, modification du contrat de mariage, testament",
        "Famille - Séparation: Divorce, liquidation de biens après divorce"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Société CIC Banque",
      role: "Institution financière",
      content: "Un partenariat de confiance avec le Cabinet Lakhoua pour nos opérations juridiques complexes."
    },
    {
      name: "Groupe MAZARS",
      role: "Cabinet d'audit",
      content: "Excellence juridique et approche professionnelle remarquable dans nos dossiers internationaux."
    },
    {
      name: "TRANSAVIA International",
      role: "Entreprise internationale",
      content: "Accompagnement juridique de premier plan pour nos activités en Tunisie et à l'international."
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
              Maître <span className="gold-text">Lakhoua</span> Mohamed Hédi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Avocat auprès de la Cour de Cassation - Docteur en Droit<br/>
              Fondé en 1973, plus de 50 ans d'excellence juridique au service de vos droits.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="elegant-card hover-lift fade-in-up border-0 bg-card/50 backdrop-blur-sm group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-secondary/10 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2 text-xs">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-tight">{detail}</span>
                      </div>
                    ))}
                  </div>
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
                    <h3 className="text-xl font-semibold mb-2">50+ Ans d'Expérience</h3>
                    <p className="text-muted-foreground">
                      Une expertise reconnue et une connaissance approfondie du droit tunisien depuis 1973.
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

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Notre Méthodologie
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée et personnalisée pour garantir la meilleure défense de vos intérêts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="elegant-card hover-lift fade-in-up border-0 bg-background/80 backdrop-blur-sm group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-secondary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-10 h-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Étude Approfondie
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analyse détaillée et minutieuse des besoins spécifiques de chaque client pour une compréhension complète de la situation juridique.
                </p>
              </CardContent>
            </Card>

            <Card className="elegant-card hover-lift fade-in-up border-0 bg-background/80 backdrop-blur-sm group" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-secondary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Stratégie Personnalisée
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Élaboration d'une stratégie sur mesure pour le règlement des litiges ou le conseil juridique adapté à votre situation.
                </p>
              </CardContent>
            </Card>

            <Card className="elegant-card hover-lift fade-in-up border-0 bg-background/80 backdrop-blur-sm group" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-gradient-to-br from-secondary/20 to-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <Handshake className="w-10 h-10 text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Approche Dynamique
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Négociations proactives et gestion efficace des conflits pour obtenir les meilleurs résultats dans les délais optimaux.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 fade-in-up">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl max-w-4xl mx-auto border border-white/20">
              <h3 className="text-2xl font-bold mb-4 hero-text">
                Excellence & Rigueur Juridique
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Notre méthodologie éprouvée, fruit de plus de 50 ans d'expérience, 
                nous permet d'offrir un service juridique d'exception adapté à chaque situation.
              </p>
              <Link to="/contact">
                <Button className="hero-button">
                  Consulter Notre Équipe
                </Button>
              </Link>
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

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Découvrez Notre Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une présentation vidéo de notre cabinet et de nos services juridiques d'excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/20">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/watch?v=v_EvZfDgKoc"
                title="Présentation du Cabinet Lakhoua"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Découvrez l'histoire et l'expertise de notre cabinet à travers cette présentation exclusive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="hero-button">
                    Prendre Rendez-vous
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                    En Savoir Plus
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Publications Académiques
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contributions scientifiques et pédagogiques de Maître Mohamed Hédi Lakhoua à la formation juridique.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cours Universitaires */}
            <div className="fade-in-up">
              <Card className="elegant-card border-0 h-full bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-secondary/10 mr-4">
                      <BookOpen className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Cours Universitaires</h3>
                      <p className="text-sm text-muted-foreground">Faculté de Droit et des Sciences Politiques de Tunis</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Cours de droit des voies d'exécution",
                      "Cours de droit commercial : Les effets de commerce",
                      "Cours de droit commercial : Les procédures collectives: le concordat préventif/ La faillite",
                      "Cours de droit commercial: Le redressement des entreprises en difficultés économiques",
                      "Cours de droit pénal général",
                      "Cours de procédures pénales"
                    ].map((course, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/5 transition-colors group">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-foreground text-sm leading-relaxed">{course}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Spécialisés */}
            <div className="fade-in-up">
              <Card className="elegant-card border-0 h-full bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-secondary/10 mr-4">
                      <Award className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Articles Spécialisés</h3>
                      <p className="text-sm text-muted-foreground">Publications dans les revues juridiques</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-xl border-l-4 border-secondary">
                    <h4 className="font-semibold mb-3 text-secondary text-lg">
                      Le recouvrement des créances en Tunisie
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      <em>In</em> l'entreprise, l'environnement juridique et fiscal, actes du colloque 
                      les journées de l'entreprise 2001, l'institut arabe des chefs d'entreprise 
                      09-10 Novembre.
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-secondary/70">
                      <Award className="w-4 h-4" />
                      <span>Publication référencée</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          Membre de l'équipe de rédaction
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Revue Tunisienne de Droit - Auteur de plusieurs articles spécialisés
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Link to="/about">
              <Button className="hero-button">
                Découvrir Plus Sur Maître Lakhoua
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;