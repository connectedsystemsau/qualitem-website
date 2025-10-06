import Button from "@/components/Button";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-brand/5 to-brand/10">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-brand/5 to-transparent"></div>
          <div className="absolute top-10 left-10 w-2 h-2 bg-brand/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-brand/30 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-brand/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-brand to-brand/70 bg-clip-text text-transparent">
              About Qualitem
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Post-Migration Metadata Validation Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8 mb-12">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Qualitem is the leading provider of post-migration validation tools for SharePoint environments. 
                Our flagship Metadata Checker & Fixer ensures that your SharePoint migration preserved all critical 
                document metadata, giving you confidence that your migration was successful.
              </p>
            </div>

            {/* Mission */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-brand">Our Mission</h2>
              <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8">
                <p className="text-lg text-foreground/80">
                  To provide enterprise-grade validation tools that verify SharePoint migration integrity and 
                  identify metadata discrepancies that require immediate attention.
                </p>
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-1 gap-8">
                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-brand">Post-Migration Focus</h3>
                  <p className="text-foreground/70">
                    Unlike migration tools that move data, we specialize in what happens after the migration is complete. 
                    We verify, validate, and repair metadata to ensure your migration was truly successful.
                  </p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-brand">Enterprise-Grade Validation</h3>
                  <p className="text-foreground/70">
                    Our tools are built for large-scale SharePoint environments with thousands of documents, 
                    providing comprehensive analysis and detailed reporting on metadata integrity.
                  </p>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-brand">Metadata Expertise</h3>
                  <p className="text-foreground/70">
                    We understand the complexities of SharePoint metadata, including managed metadata, taxonomies, 
                    content types, and custom properties across Office documents and SharePoint Online.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Suite */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">Our Product Suite</h2>
              <div className="bg-gradient-to-r from-brand via-brand-dark to-brand text-white rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Metadata Checker & Fixer</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Post-Migration Validation</h4>
                        <p className="text-white/80 text-sm">Comprehensive scan of Office documents and SharePoint metadata</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Discrepancy Detection</h4>
                        <p className="text-white/80 text-sm">Advanced algorithms identify metadata inconsistencies after migration</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Automated Repair</h4>
                        <p className="text-white/80 text-sm">Intelligent repair system fixes common metadata issues</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Detailed Reporting</h4>
                        <p className="text-white/80 text-sm">Executive-level reports on migration success and areas requiring attention</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Batch Processing</h4>
                        <p className="text-white/80 text-sm">Handle thousands of documents efficiently</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">Why Enterprises Choose Qualitem</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-brand mb-2">250+</div>
                  <div className="text-foreground/70">Successful Migration Validations</div>
                </div>
                <div className="text-center bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-brand mb-2">98.5%</div>
                  <div className="text-foreground/70">Issue Detection Rate</div>
                </div>
                <div className="text-center bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-6">
                  <div className="text-3xl font-bold text-brand mb-2">5M+</div>
                  <div className="text-foreground/70">Documents Verified</div>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">Industries We Serve</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-6">
                  <h3 className="font-semibold text-brand mb-2">Financial Services</h3>
                  <p className="text-foreground/70 text-sm">Ensuring compliance and metadata integrity for highly regulated environments</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-6">
                  <h3 className="font-semibold text-brand mb-2">Healthcare Systems</h3>
                  <p className="text-foreground/70 text-sm">Critical validation for patient data and regulatory compliance</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-6">
                  <h3 className="font-semibold text-brand mb-2">Manufacturing</h3>
                  <p className="text-foreground/70 text-sm">Large-scale document validation across global operations</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-6">
                  <h3 className="font-semibold text-brand mb-2">Government Agencies</h3>
                  <p className="text-foreground/70 text-sm">Secure validation with government-grade security requirements</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-brand">Ready to Validate Your Migration?</h2>
                <p className="text-foreground/70 mb-6">
                  Contact us to learn how our Metadata Checker & Fixer can give you confidence in your SharePoint migration success.
                </p>
                <Link href="/contact">
                  <Button variant="brand" className="mr-4">
                    Start Free Validation
                  </Button>
                </Link>
                <Button variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}