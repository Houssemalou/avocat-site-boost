import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Scale, Users, BookOpen, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import lawyerPortrait from '@/assets/lawyer-portrait.jpg';
import officeBuilding from '@/assets/office-building.jpg';

const About = () => {
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

  const expertise = [
    {
      icon: <Scale className="w-8 h-8 text-secondary" />,
      title: "Droit des Affaires",
      description: "Spécialisation en droit commercial, contrats d'entreprise, fusions-acquisitions et gouvernance.",
      experience: "15 ans d'expérience"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Droit Civil",
      description: "Expert en droit de la famille, successions, immobilier et responsabilité civile.",
      experience: "12 ans d'expérience"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      title: "Droit du Travail",
      description: "Accompagnement des entreprises et salariés dans leurs relations de travail.",
      experience: "10 ans d'expérience"
    }
  ];

  const qualifications = [
    {
      icon: <GraduationCap className="w-6 h-6 text-secondary" />,
      title: "Master en Droit",
      subtitle: "Université Paris 1 Panthéon-Sorbonne",
      year: "2001"
    },
    {
      icon: <Award className="w-6 h-6 text-secondary" />,
      title: "Diplôme d'Avocat",
      subtitle: "École de Formation du Barreau",
      year: "2003"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-secondary" />,
      title: "Spécialisation",
      subtitle: "Droit des Affaires Internationales",
      year: "2008"
    }
  ];

  const achievements = [
    { number: "500+", label: "Clients Satisfaits" },
    { number: "20+", label: "Années d'Expérience" },
    { number: "95%", label: "Taux de Réussite" },
    { number: "24/7", label: "Disponibilité Urgences" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              À Propos du Cabinet
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fondé sur les valeurs d'excellence, d'intégrité et de proximité client, 
              notre cabinet vous accompagne depuis plus de 20 ans dans tous vos enjeux juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Lawyer Profile */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="relative">
                <img 
                  src={lawyerPortrait} 
                  alt="Maître Jean Dupont - Avocat" 
                  className="w-full h-96 object-cover rounded-2xl shadow-[var(--elegant-shadow)]"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                  <Scale className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                Maître Jean Dupont
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Avocat au Barreau de Paris depuis 2003, je me suis spécialisé dans le conseil 
                juridique aux entreprises et aux particuliers. Ma philosophie : allier rigueur 
                juridique et compréhension humaine pour offrir un service d'excellence.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Membre du Barreau de Paris</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Spécialiste en Droit des Affaires</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Formateur en Droit Commercial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Membre de l'Association des Avocats d'Affaires</span>
                </div>
              </div>

              <blockquote className="border-l-4 border-secondary pl-6 italic text-lg text-muted-foreground">
                "Le droit n'est pas seulement une science, c'est un art qui se nourrit de l'expérience 
                et de la compréhension des enjeux humains et économiques."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Domaines d'Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une maîtrise approfondie du droit dans ses différentes branches pour vous conseiller efficacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <Card 
                key={index} 
                className="elegant-card hover-lift fade-in-up border-0 bg-background"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-secondary/10">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-center leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                      {item.experience}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 hero-text">
                Formation & Qualifications
              </h2>
              <div className="space-y-6">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      {qualification.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{qualification.title}</h3>
                      <p className="text-muted-foreground mb-1">{qualification.subtitle}</p>
                      <span className="text-sm text-secondary font-medium">{qualification.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fade-in-up">
              <img 
                src={officeBuilding} 
                alt="Cabinet d'avocat - Bâtiment" 
                className="w-full h-96 object-cover rounded-2xl shadow-[var(--elegant-shadow)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Des chiffres qui témoignent de notre engagement et de notre expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">
                  {achievement.number}
                </div>
                <div className="text-white/90 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;