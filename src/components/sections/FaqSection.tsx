
import React from 'react';

const FaqSection = () => {
  const faqs = [
    {
      question: "Wie kann ich ein Angebot anfordern?",
      answer: "Sie können ein Angebot über unser Kontaktformular, per E-Mail oder telefonisch anfordern. Wir melden uns umgehend bei Ihnen, um Ihre individuellen Anforderungen zu besprechen.",
      delay: 100
    },
    {
      question: "Welche Arten von Gebäuden betreuen Sie?",
      answer: "Wir betreuen verschiedenste Objekte: Bürogebäude, Wohnanlagen, Einzelhandelsgeschäfte, öffentliche Einrichtungen, Schulen und viele mehr. Unsere Dienstleistungen passen wir an die jeweiligen Anforderungen an.",
      delay: 200
    },
    {
      question: "Sind Ihre Dienstleistungen individuell anpassbar?",
      answer: "Ja, alle unsere Dienstleistungen werden individuell auf Ihre Bedürfnisse zugeschnitten. Wir erstellen nach einer genauen Analyse Ihrer Immobilie ein maßgeschneidertes Konzept für Sie.",
      delay: 300
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Häufig gestellte Fragen</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border animate-fade-up"
              style={{ animationDelay: `${faq.delay}ms` }}
            >
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
