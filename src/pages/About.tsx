import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Scale, Users, BookOpen, Briefcase, Building, FileText, UserCheck } from 'lucide-react';
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

      {/* Consultation Gratuite */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSI0MCIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full mb-8 animate-pulse">
              <UserCheck className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-12 hero-text bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Consultation Gratuite
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Bénéficiez d'une première consultation gratuite pour évaluer votre situation juridique 
              et découvrir les solutions adaptées à vos besoins.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover-lift fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Évaluation Professionnelle</h3>
                <p className="text-sm text-muted-foreground">Analyse approfondie de votre dossier par nos experts</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover-lift fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Conseils Personnalisés</h3>
                <p className="text-sm text-muted-foreground">Solutions sur mesure adaptées à votre situation</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover-lift fade-in-up" style={{ animationDelay: '300ms' }}>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Excellence Garantie</h3>
                <p className="text-sm text-muted-foreground">50+ années d'expertise à votre service</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-8 rounded-2xl border border-secondary/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-2xl font-bold text-white">!</span>
                </div>
              </div>
              <p className="text-lg font-medium text-secondary mb-2">
                Première consultation entièrement gratuite
              </p>
              <p className="text-muted-foreground">
                Prenez rendez-vous dès aujourd'hui pour discuter de votre situation juridique 
                sans aucun engagement financier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 hero-text">
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

      {/* Histoire du Cabinet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 hero-text">
                L'Entreprise Lakhoua
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fondé en 1973 par Maître Mohamed Hédi Lakhoua, le cabinet d'avocats a toujours pratiqué 
                  une activité judiciaire en tant que plaideur en plus de fournir des services de conseil.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Grâce à une équipe qualifiée composée de dix personnes : Avocats, Avocats stagiaires, 
                  Consultants et Assistants... Le Cabinet Lakhoua a développé un partenariat étroit avec 
                  des entreprises nationales et internationales de premier plan.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fier d'une réputation juridique pluridisciplinaire de près de cinquante ans, 
                  le Cabinet Lakhoua s'engage à répondre aux exigences du monde des affaires 
                  dans le plus grand respect de sa méthodologie et de ses principes.
                </p>

                <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-secondary mr-3" />
                    <h4 className="font-semibold text-secondary">Notre Engagement</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Une approche personnalisée et professionnelle pour chaque client, 
                    alliant tradition juridique et innovation moderne.
                  </p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
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

      {/* Publications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 hero-text">
              Publications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contributions académiques et scientifiques de Maître Mohamed Hédi Lakhoua.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cours */}
            <div className="fade-in-up">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold">Cours Universitaires</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Disponibles à la Faculté de Droit et des Sciences Politiques de Tunis
                </p>
                
                <div className="space-y-4">
                  {[
                    "Cours de droit des voies d'exécution",
                    "Cours de droit commercial : Les effets de commerce",
                    "Cours de droit commercial : Les procédures collectives: le concordat préventif/ La faillite",
                    "Cours de droit commercial: Le redressement des entreprises en difficultés économiques",
                    "Cours de droit pénal général",
                    "Cours de procédures pénales"
                  ].map((course, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-foreground">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles */}
            <div className="fade-in-up">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold">Articles Spécialisés</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Publications dans les revues juridiques spécialisées
                </p>
                
                <Card className="elegant-card border-0 bg-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-2 text-secondary">
                          Le recouvrement des créances en Tunisie
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <em>In</em> l'entreprise, l'environnement juridique et fiscal, actes du colloque 
                          les journées de l'entreprise 2001, l'institut arabe des chefs d'entreprise 
                          09-10 Novembre.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 p-4 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note :</strong> Maître Lakhoua est également auteur de plusieurs autres 
                    articles parus dans les revues spécialisées et membre de l'équipe de rédaction 
                    de la Revue Tunisienne de Droit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborateurs */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Nos Collaborateurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une équipe d'avocats expérimentés et spécialisés pour vous accompagner dans tous vos projets juridiques.
            </p>
            <div className="mt-4 p-3 bg-secondary/10 rounded-lg inline-block">
              <p className="text-sm text-secondary font-medium">
                Cette liste n'est communiquée qu'à titre indicatif, elle est amenée à évoluer en fonction des recrutements
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Maître Abdelwahed LANDOLSI",
                title: "Avocat à la cour",
                qualifications: [
                  "Maîtrise en droit privé en 1996 (Faculté de droit de Tunis)",
                  "Certificat d'aptitude à la profession d'avocat en 1997", 
                  "Diplôme d'études approfondies en droit privé en 1998 (Faculté de droit de Tunis)",
                  "Assistant à la faculté de droit de Tunis depuis 2000"
                ]
              },
              {
                name: "Maître Ali BORNAZ",
                title: "Avocat à la cour",
                qualifications: [
                  "Maîtrise en droit privé en 2005 (Faculté de droit de Caen)",
                  "Diplôme d'études approfondies en droit des affaires en 2006 (Faculté de droit de Caen)"
                ]
              },
              {
                name: "Maître Zeineb Labidi",
                title: "Avocate à la cour", 
                qualifications: [
                  "Licence en droit privé en 2016 (Faculté de droit de Tunis)",
                  "Master en droit fiscal en 2018 (Faculté de droit de Tunis)"
                ]
              },
              {
                name: "Maître Insaf Ayari",
                title: "Avocate à la cour",
                qualifications: [
                  "Licence en droit privé en 2016 (Faculté de droit de Tunis)",
                  "Master en 2005 (Faculté de droit de Tunis)"
                ]
              }
            ].map((collaborator, index) => (
              <Card 
                key={index} 
                className="elegant-card hover-lift fade-in-up border-0 bg-background"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                      <UserCheck className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-foreground">
                        {collaborator.name}
                      </h3>
                      <p className="text-secondary font-medium">
                        {collaborator.title}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <GraduationCap className="w-4 h-4 text-secondary mr-2" />
                      Qualifications
                    </h4>
                    {collaborator.qualifications.map((qualification, qualIndex) => (
                      <div key={qualIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {qualification}
                        </p>
                      </div>
                    ))}
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

export default About;