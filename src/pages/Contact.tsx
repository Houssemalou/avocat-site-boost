import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé avec succès !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-secondary" />,
      title: "Adresse",
      details: [
        "123 Avenue des Champs-Élysées",
        "75008 Paris, France"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      title: "Téléphone",
      details: [
        "+33 1 42 23 45 67",
        "Urgences: +33 6 12 34 56 78"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-secondary" />,
      title: "Email",
      details: [
        "contact@cabinet-juridique.fr",
        "urgences@cabinet-juridique.fr"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary" />,
      title: "Horaires",
      details: [
        "Lun - Ven: 9h - 18h",
        "Sam: 9h - 12h"
      ]
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              Contactez-Nous
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Besoin d'un conseil juridique ? N'hésitez pas à nous contacter. 
              Nous sommes à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2 fade-in-up">
              <Card className="elegant-card border-0 shadow-[var(--card-shadow)]">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold hero-text flex items-center space-x-2">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                    <span>Envoyez-nous un message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-border/50 focus:border-secondary"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-border/50 focus:border-secondary"
                          placeholder="votre.email@exemple.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-border/50 focus:border-secondary"
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Sujet *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="border-border/50 focus:border-secondary"
                          placeholder="Objet de votre demande"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-border/50 focus:border-secondary resize-none"
                        placeholder="Décrivez votre situation ou votre demande en détail..."
                      />
                    </div>
                    
                    <Button type="submit" className="hero-button w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 fade-in-up">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="elegant-card hover-lift border-0 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Emergency Contact */}
              <Card className="elegant-card border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 gold-text">
                    Urgences 24h/24
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Pour les situations juridiques urgentes, nous sommes disponibles 
                    24h/24 et 7j/7.
                  </p>
                  <div className="flex items-center space-x-2 text-secondary font-medium">
                    <Phone className="w-4 h-4" />
                    <span>+33 6 12 34 56 78</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">
              Notre Localisation
            </h2>
            <p className="text-lg text-muted-foreground">
              Situé au cœur de Paris, notre cabinet est facilement accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <Card className="elegant-card border-0 overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                  {/* Placeholder for interactive map */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">123 Avenue des Champs-Élysées</h3>
                      <p className="text-muted-foreground">75008 Paris, France</p>
                      <div className="mt-4">
                        <Button 
                          onClick={() => window.open('https://maps.google.com/?q=123+Avenue+des+Champs-Élysées,+75008+Paris', '_blank')}
                          className="outline-button"
                        >
                          Voir sur Google Maps
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="fade-in-up space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 hero-text">
                  Comment nous trouver ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>En métro :</strong> Ligne 1, 9, 13 - Station Champs-Élysées - Clemenceau
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>En bus :</strong> Lignes 28, 42, 73, 80, 83
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>En voiture :</strong> Parking public Champs-Élysées à 2 minutes à pied
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-primary">Consultation sur rendez-vous</h4>
                <p className="text-muted-foreground text-sm">
                  Pour garantir un accueil optimal, nous recevons uniquement sur rendez-vous. 
                  Contactez-nous pour planifier votre consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;