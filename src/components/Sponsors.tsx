const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", placeholder: true },
    { name: "Sponsor 2", placeholder: true },
    { name: "Sponsor 3", placeholder: true },
    { name: "Sponsor 4", placeholder: true },
  ];

  const partners = [
    { name: "Partner 1", placeholder: true },
    { name: "Partner 2", placeholder: true },
    { name: "Partner 3", placeholder: true },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sponsors & Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are grateful for the support of our sponsors and partners who help make our mission possible.
          </p>
        </div>

        {/* Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Our Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-40 h-24 bg-muted/50 border border-border rounded-lg flex items-center justify-center hover:bg-muted transition-colors duration-300"
              >
                <span className="text-muted-foreground text-sm font-medium">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-40 h-24 bg-muted/50 border border-border rounded-lg flex items-center justify-center hover:bg-muted transition-colors duration-300"
              >
                <span className="text-muted-foreground text-sm font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
