import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-brand/5 to-brand/10 py-20 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-brand/5 to-transparent"></div>
          <div className="absolute top-10 left-10 w-2 h-2 bg-brand/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-brand/30 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-brand/20 rounded-full"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-brand/8 rounded-full blur-lg animate-bounce delay-500"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-brand/10 backdrop-blur-sm border border-brand/20 rounded-full text-sm font-medium text-brand mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-brand rounded-full mr-2 animate-pulse"></span>
              Essential Post-Migration Validation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-brand to-brand/70 bg-clip-text text-transparent animate-fade-in-up">
              Verify Metadata Integrity After SharePoint Migration
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Run our Metadata Checker & Fixer after your SharePoint migration to identify and resolve metadata 
              discrepancies between Office documents and SharePoint Online with comprehensive validation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button variant="brand" className="sm:w-auto group relative overflow-hidden">
                <span className="relative z-10">Start Free Metadata Scan</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-light to-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Button>
              <Button variant="secondary" className="sm:w-auto border-2 border-brand/20 hover:border-brand/40 hover:bg-brand/5 transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-brand/5 via-transparent to-brand/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-brand bg-clip-text text-transparent">
              Metadata Mastery Platform
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive SharePoint metadata validation, analysis, and remediation solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand/30 relative">
              <div className="absolute -top-2 -right-2 bg-brand text-white text-xs px-2 py-1 rounded-full font-semibold">FLAGSHIP</div>
              <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-brand transition-colors">Metadata Checker & Fixer</h3>
              <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors">
                Post-migration validation tool that scans Office documents and SharePoint Online to identify 
                metadata discrepancies, ensuring your migration preserved all critical document properties.
              </p>
            </div>

            <div className="group bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand/30">
              <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-brand transition-colors">Migration Validation Reports</h3>
              <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors">
                Comprehensive post-migration analytics showing metadata integrity status, migration success rates, 
                and detailed reports on any discrepancies that need attention after your SharePoint migration.
              </p>
            </div>

            <div className="group bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand/30">
              <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-brand transition-colors">Automated Metadata Repair</h3>
              <p className="text-foreground/70 group-hover:text-foreground/80 transition-colors">
                Intelligent repair system that automatically fixes common metadata issues discovered after migration, 
                with batch processing capabilities to restore metadata integrity across thousands of documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-brand/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-brand/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-brand bg-clip-text text-transparent">
                Post-Migration Validation Excellence
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-semibold mb-2 group-hover:text-brand transition-colors">Migration Verification</h3>
                    <p className="text-foreground/70">
                      Comprehensive post-migration analysis that compares pre and post-migration metadata to ensure 
                      your SharePoint migration preserved all critical document properties and taxonomies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-semibold mb-2 group-hover:text-brand transition-colors">Discrepancy Detection</h3>
                    <p className="text-foreground/70">
                      Advanced algorithms scan thousands of documents to identify metadata inconsistencies 
                      that occurred during migration, highlighting issues that require immediate attention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="font-semibold mb-2 group-hover:text-brand transition-colors">Migration Success Verification</h3>
                    <p className="text-foreground/70">
                      Comprehensive validation reports that certify your SharePoint migration was successful, 
                      providing audit-ready documentation of metadata preservation and integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-brand/10 via-background to-brand/5 backdrop-blur-sm rounded-2xl p-8 border border-brand/20 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand rounded-full animate-ping"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand rounded-full"></div>
                
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="group hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-brand mb-2 group-hover:text-brand-dark transition-colors">250+</div>
                      <div className="text-foreground/70">Migrations Validated</div>
                    </div>
                    <div className="group hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-brand mb-2 group-hover:text-brand-dark transition-colors">98.5%</div>
                      <div className="text-foreground/70">Issues Detected</div>
                    </div>
                    <div className="group hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-brand mb-2 group-hover:text-brand-dark transition-colors">72hrs</div>
                      <div className="text-foreground/70">Average Validation Time</div>
                    </div>
                    <div className="group hover:scale-105 transition-transform duration-300">
                      <div className="text-3xl font-bold text-brand mb-2 group-hover:text-brand-dark transition-colors">5M+</div>
                      <div className="text-foreground/70">Documents Verified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand via-brand-dark to-brand text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
              Validate Your Migration Success
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Don&apos;t assume your SharePoint migration was perfect. Run our Metadata Checker & Fixer 
              to verify all document metadata was preserved and identify any issues requiring attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Link
                href="/contact"
                className="group bg-white text-brand px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="group-hover:mr-2 transition-all duration-300">Start Free Metadata Scan</span>
                <svg className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/metadata-checker"
                className="group border-2 border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <span className="group-hover:mr-2 transition-all duration-300">Explore Features</span>
                <svg className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
