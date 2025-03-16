
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Award, ThumbsUp, Target } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamMember from '@/components/ui/TeamMember';

const About = () => {
  const coreValues = [
    {
      title: 'Qualität',
      description: 'Wir setzen höchste Standards bei allen unseren Dienstleistungen und streben stets nach exzellenten Ergebnissen.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Kundenzufriedenheit',
      description: 'Die Zufriedenheit unserer Kunden steht im Mittelpunkt unseres Handelns. Wir hören zu und passen unsere Leistungen an Ihre Bedürfnisse an.',
      icon: <ThumbsUp className="w-8 h-8" />
    },
    {
      title: 'Nachhaltigkeit',
      description: 'Wir berücksichtigen Umweltaspekte in unseren Dienstleistungen und fördern nachhaltige Praktiken im Gebäudemanagement.',
      icon: <Target className="w-8 h-8" />
    }
  ];

  const teamMembers = [
    {
      name: 'Robert Krause',
      role: 'Geschäftsführer',
      image: '/images/team-member-1.jpg',
      bio: 'Mit über 20 Jahren Erfahrung im Gebäudemanagement leitet Robert unser Unternehmen mit Expertise und Leidenschaft.',
      email: 'r.krause@rok-gebaeudemanagement.de',
      linkedin: '#'
    },
    {
      name: 'Olivia Becker',
      role: 'Betriebsleiterin',
      image: '/images/team-member-2.jpg',
      bio: 'Olivia koordiniert unser Betriebsteam und sorgt für reibungslose Abläufe bei allen Projekten.',
      email: 'o.becker@rok-gebaeudemanagement.de',
      linkedin: '#'
    },
    {
      name: 'Karl Weber',
      role: 'Technischer Leiter',
      image: '/images/team-member-3.jpg',
      bio: 'Karl bringt sein umfangreiches technisches Know-how ein und leitet unsere Facility Management Abteilung.',
      email: 'k.weber@rok-gebaeudemanagement.de',
      linkedin: '#'
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-rok-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-rok-500/10 text-rok-700 mb-6">
                <span className="bg-rok-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">
                  <CheckCircle className="w-4 h-4" />
                </span>
                Über uns
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Wir sind <span className="text-rok-600">ROK</span> Gebäudemanagement
              </h1>
              <p className="text-lg text-muted-foreground">
                Ein Team von Experten, das mit Leidenschaft und Fachwissen für optimales Gebäudemanagement sorgt. Lernen Sie uns kennen.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Story */}
        <section className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <h2 className="text-3xl font-semibold mb-6">Unsere Geschichte</h2>
              <p className="text-muted-foreground mb-4">
                ROK Gebäudemanagement wurde 2005 von Robert Krause gegründet, mit der Vision, hochwertige und zuverlässige Gebäudemanagement-Dienstleistungen anzubieten, die auf die individuellen Bedürfnisse der Kunden zugeschnitten sind.
              </p>
              <p className="text-muted-foreground mb-4">
                Was als kleines Unternehmen mit nur wenigen Mitarbeitern begann, hat sich zu einem führenden Anbieter von Gebäudemanagement-Dienstleistungen in der Region entwickelt. Heute betreuen wir eine Vielzahl von Objekten, von Bürogebäuden und Geschäftsflächen bis hin zu Wohnanlagen und öffentlichen Einrichtungen.
              </p>
              <p className="text-muted-foreground mb-6">
                Unser Erfolgsrezept ist die Kombination aus technischem Know-how, langjähriger Erfahrung und einem hohen Maß an Kundenorientierung. Wir sind stolz auf unser Team aus Fachleuten, die mit Engagement und Leidenschaft für die Zufriedenheit unserer Kunden sorgen.
              </p>
              <Link 
                to="/services" 
                className="rok-button-primary inline-flex items-center"
              >
                Unsere Leistungen entdecken
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/company-story.jpg" 
                  alt="ROK Gebäudemanagement Team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-medium">Gegründet 2005</p>
                  <h3 className="text-xl font-semibold">Mit Erfahrung und Leidenschaft</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="bg-rok-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 animate-fade-up">
              <h2 className="section-title">Unsere Werte</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Diese Grundwerte leiten uns bei allem, was wir tun, und formen unsere Unternehmenskultur sowie unseren Ansatz zum Gebäudemanagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-sm border text-center animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-rok-100 text-rok-600 rounded-full mb-5">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="page-container">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="section-title">Unser Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Lernen Sie die erfahrenen Fachleute kennen, die ROK Gebäudemanagement zu dem machen, was es ist.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                delay={index * 100}
                email={member.email}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-rok-600 text-white py-16 md:py-24 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              Bereit, mit uns zusammenzuarbeiten?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Kontaktieren Sie uns noch heute für ein unverbindliches Gespräch über Ihre Gebäudemanagement-Anforderungen.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-white text-rok-700 font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors animate-fade-up group"
              style={{ animationDelay: "200ms" }}
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
