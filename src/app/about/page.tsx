import Button from "@/components/Button";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-alt/40 via-background-alt/20 to-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-brand/10 to-transparent"></div>
          <div className="absolute top-10 left-10 w-2 h-2 bg-brand/30 rounded-full"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-accent/30 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-brand/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-brand to-accent dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 bg-clip-text text-transparent">
              About Qualitem
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto">
              SharePoint Migration Metadata Validation Specialists
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Company Overview */}
            <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 mb-12 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-6 text-brand">Who We Are</h2>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Qualitem, developed by Connected Systems Australia, is the leading specialist in post-migration 
                metadata validation for SharePoint environments. We understand that a successful SharePoint migration 
                isn&apos;t just about moving files—it&apos;s about ensuring that all the critical metadata that makes your 
                documents discoverable and compliant is preserved perfectly.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Our flagship Metadata Checker & Fixer tool has been trusted by hundreds of enterprises worldwide 
                to validate migration success and repair metadata discrepancies that could impact business operations.
              </p>
            </div>

            {/* The Problem We Solve */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">The Problem We Solve</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-error/10 dark:bg-error/20 border border-error/30 dark:border-error/40 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-error dark:text-error/90">Hidden Migration Issues</h3>
                  <p className="text-foreground/90">
                    SharePoint migrations often appear successful on the surface, but critical metadata may be 
                    lost, corrupted, or incorrectly mapped during the process.
                  </p>
                </div>
                <div className="bg-warning/10 dark:bg-warning/20 border border-warning/30 dark:border-warning/40 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-warning dark:text-warning/90">Compliance Risks</h3>
                  <p className="text-foreground/90">
                    Missing or incorrect metadata can lead to compliance failures, poor searchability, 
                    and broken business processes that rely on document properties.
                  </p>
                </div>
                <div className="bg-brand/10 dark:bg-brand/20 border border-brand/30 dark:border-brand/40 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-brand dark:text-brand-light">Manual Validation Challenges</h3>
                  <p className="text-foreground/90">
                    Manually checking thousands of documents for metadata integrity is impractical and 
                    error-prone for enterprise-scale SharePoint environments.
                  </p>
                </div>
                <div className="bg-success/10 dark:bg-success/20 border border-success/30 dark:border-success/40 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-success dark:text-success/90">Post-Migration Uncertainty</h3>
                  <p className="text-foreground/90">
                    Organizations need confidence that their SharePoint migration preserved all critical 
                    document metadata and maintained data integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">Our Solution</h2>
              <div className="bg-gradient-to-r from-brand via-orange-600 to-rose-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Metadata Checker & Fixer</h3>
                <p className="text-white/90 mb-6">
                  A comprehensive Windows desktop application that validates SharePoint migration success by 
                  comparing Office document properties with SharePoint Online metadata, identifying discrepancies, 
                  and providing automated repair capabilities.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Free Scanner Version</h4>
                        <p className="text-white/80 text-sm">Comprehensive detection of metadata discrepancies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Licensed Repair Tool</h4>
                        <p className="text-white/80 text-sm">Automated correction of common metadata issues</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Batch Processing</h4>
                        <p className="text-white/80 text-sm">Handle thousands of documents efficiently</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Detailed Reporting</h4>
                        <p className="text-white/80 text-sm">Executive-level reports on migration integrity</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Windows Desktop App</h4>
                        <p className="text-white/80 text-sm">Secure, local processing of sensitive documents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">Why Enterprises Choose Qualitem</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-brand mb-2">500+</div>
                  <div className="text-foreground-muted">Successful Validations</div>
                </div>
                <div className="text-center bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-accent mb-2">99.2%</div>
                  <div className="text-foreground-muted">Issue Detection Rate</div>
                </div>
                <div className="text-center bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-error mb-2">10M+</div>
                  <div className="text-foreground-muted">Documents Verified</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-brand">Post-Migration Specialists</h3>
                  <p className="text-foreground/90">
                    Unlike migration tools that move data, we specialize exclusively in what happens after 
                    the migration is complete—ensuring your metadata integrity is preserved.
                  </p>
                </div>
                
                <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-accent">Enterprise-Grade Security</h3>
                  <p className="text-foreground/90">
                    Windows desktop application ensures your sensitive documents never leave your environment 
                    while providing comprehensive metadata validation.
                  </p>
                </div>
                
                <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-error">Metadata Expertise</h3>
                  <p className="text-foreground/90">
                    Deep understanding of SharePoint metadata complexities, including managed metadata, 
                    taxonomies, content types, and custom properties.
                  </p>
                </div>
                
                <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-success">Shareware Model</h3>
                  <p className="text-foreground/90">
                    Try our free scanner to identify issues, then upgrade to the licensed version for 
                    automated repairs—just like the trusted shareware tools of the past.
                  </p>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">Industries We Serve</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand/10 dark:bg-brand/20 border border-brand/30 dark:border-brand/40 rounded-xl p-6">
                  <h3 className="font-semibold text-brand mb-2">Financial Services</h3>
                  <p className="text-foreground/90 text-sm">Ensuring compliance and metadata integrity for highly regulated environments</p>
                </div>
                <div className="bg-error/10 dark:bg-error/20 border border-error/30 dark:border-error/40 rounded-xl p-6">
                  <h3 className="font-semibold text-error mb-2">Healthcare Systems</h3>
                  <p className="text-foreground/90 text-sm">Critical validation for patient data and regulatory compliance</p>
                </div>
                <div className="bg-accent/10 dark:bg-accent/20 border border-accent/30 dark:border-accent/40 rounded-xl p-6">
                  <h3 className="font-semibold text-accent mb-2">Manufacturing</h3>
                  <p className="text-foreground/90 text-sm">Large-scale document validation across global operations</p>
                </div>
                <div className="bg-success/10 dark:bg-success/20 border border-success/30 dark:border-success/40 rounded-xl p-6">
                  <h3 className="font-semibold text-success mb-2">Government Agencies</h3>
                  <p className="text-foreground/90 text-sm">Secure validation with government-grade security requirements</p>
                </div>
              </div>
            </div>

            {/* Company Behind Qualitem */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-brand">Connected Systems Australia</h2>
              <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 shadow-lg">
                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                  Qualitem is developed and maintained by Connected Systems Australia, a technology company 
                  specializing in SharePoint and Microsoft 365 solutions. With years of experience in enterprise 
                  document management and migration projects, we identified the critical gap in post-migration 
                  validation and created Qualitem to address this need.
                </p>
                <p className="text-foreground/90">
                  Our team combines deep technical expertise in SharePoint architecture with practical experience 
                  from hundreds of real-world migration projects, ensuring our tools solve actual business problems 
                  rather than theoretical ones.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-brand/10 to-accent/10 dark:from-pink-500/20 dark:to-blue-500/20 border border-brand/40 dark:border-pink-500/60 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-brand dark:text-pink-400">Ready to Validate Your Migration?</h2>
                <p className="text-foreground/90 mb-6">
                  Download our free scanner to discover any metadata issues in your SharePoint migration, 
                  then upgrade to automatically fix what we find.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button variant="brand" className="sm:w-auto">
                      Download Free Scanner
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="secondary" className="sm:w-auto">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}