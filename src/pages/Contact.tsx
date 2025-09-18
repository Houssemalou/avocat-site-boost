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
import Map from '@/components/Map';

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
    // FormSubmit will handle the form submission
    toast({
      title: "Formulaire soumis !",
      description: "Votre message a été envoyé avec succès.",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-secondary" />,
      title: "Adresse",
      details: [
        "13, rue docteur Calmette",
        "Mutuelleville, Tunis 1082"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-secondary" />,
      title: "Téléphone",
      details: [
        "71 78 39 39",
        "Fax: 71 78 30 82"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-secondary" />,
      title: "Email",
      details: [
        "abbes.lakhoua@gmail.com",
        "contact@cabinetlakhoua.tn"
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

      {/* Contact Form & Info avec Map en arrière-plan */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Map 
            isBackground={true}
            height="h-full"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  <form 
                    action="https://formsubmit.co/contact@cabinetlakhoua.tn" 
                    method="POST"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <input type="hidden" name="_subject" value="Nouveau message de contact - Cabinet Lakhoua" />
                    <input type="hidden" name="_language" value="fr" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.origin + "/contact?success=true"} />
                    
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
                          placeholder="+216 XX XX XX XX"
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
                    Pour les situations juridiques urgentes, contactez-nous 
                    durant nos heures d'ouverture.
                  </p>
                  <div className="flex items-center space-x-2 text-secondary font-medium">
                    <Phone className="w-4 h-4" />
                    <span>71 78 39 39</span>
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
                Situé à Mutuelleville, Tunis, notre cabinet est facilement accessible.
              </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <Card className="elegant-card border-0 overflow-hidden">
                <Map 
                  height="h-96"
                />
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
                      <strong>En transport :</strong> Accessible par les transports en commun de Tunis
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>En taxi :</strong> Facilement accessible depuis le centre-ville
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>En voiture :</strong> Parking disponible à proximité
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