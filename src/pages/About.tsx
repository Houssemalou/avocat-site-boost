import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Scale, Users, BookOpen, Briefcase, Building, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import lawyerPortrait from '@/assets/lawyer-lakhoua.jpg';
import officeBuilding from '@/assets/office-interior.jpg';

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
      description: "Fusion acquisition, droit bancaire et financier, droit des assurances, recouvrement des créances, droit pénal des affaires.",
      experience: "Spécialité principale"
    },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Droit Fiscal",
      description: "Fiscalité directe et indirecte, assistance contrôle fiscal, contentieux devant les tribunaux tunisiens.",
      experience: "Expertise approfondie"
    },
    {
      icon: <Building className="w-8 h-8 text-secondary" />,
      title: "Droit Immobilier",
      description: "Construction, ventes immobilières, propriété intellectuelle, droit d'auteur, nouvelles technologies.",
      experience: "Compétence étendue"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-secondary" />,
      title: "Arbitrage & Notariat",
      description: "Arbitrages internes et internationaux, constitution sociétés, vie de l'entreprise, baux commerciaux.",
      experience: "Excellence reconnue"
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
    { number: "1000+", label: "Clients Satisfaits" },
    { number: "50+", label: "Années d'Expérience" },
    { number: "10+", label: "Collaborateurs" },
    { number: "6", label: "Domaines d'Expertise" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              Cabinet Lakhoua - مكتب لخوة للمحاماة
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fondé en 1973 par Maître Mohamed Hédi Lakhoua, composé d'une dizaine de personnes, 
              le Cabinet a développé un partenariat étroit avec des entreprises nationales et internationales de premier ordre. 
              Fier d'une notoriété juridique pluridisciplinaire qui dure depuis plus de 50 ans.
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
                  alt="Maître Lakhoua Mohamed Hédi - Avocat" 
                  className="w-full h-96 object-cover rounded-2xl shadow-[var(--elegant-shadow)]"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                  <Scale className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                Maître Lakhoua Mohamed Hédi
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Avocat auprès de la Cour de Cassation avec 45 ans d'expérience, Docteur en Droit, 
                Professeur Emérite à la faculté de droit et des sciences politiques de Tunis. 
                Spécialiste en droit des affaires, directeur de mémoires et auteur de plusieurs articles spécialisés.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Avocat auprès de la Cour de Cassation (45 ans d'expérience)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Docteur en Droit, Professeur Emérite</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Membre équipe de rédaction Revue Tunisienne de Droit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Ancien président jury concours au Ministère enseignement supérieur</span>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-secondary">La devise du cabinet :</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>• Confiance</span>
                  <span>• Confidentialité</span>
                  <span>• Sérieux</span>
                  <span>• Rigueur et célérité</span>
                </div>
              </div>
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