import Button from "@/components/Button";

export default function Contact() {
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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Questions about checking your SharePoint migration? We&apos;re here to help make it simple.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-brand">Get Started with Post-Migration Validation</h2>
                  <p className="text-lg text-foreground/70 mb-8">
                    Whether you&apos;ve just completed a SharePoint migration or want to verify an existing environment, 
                    our metadata validation tools can provide the confidence you need.
                  </p>
                </div>

                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-6 text-brand">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:validation@qualitem.com" className="text-brand hover:text-brand-dark transition-colors">validation@qualitem.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-foreground/70">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Enterprise Support</p>
                        <a href="mailto:enterprise@qualitem.com" className="text-brand hover:text-brand-dark transition-colors">enterprise@qualitem.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4 text-brand">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-foreground/70">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Weekend</span>
                      <span className="text-foreground/70">Emergency support for enterprise clients</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process & Services */}
              <div className="space-y-8">
                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-6 text-brand">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">1</div>
                      <div>
                        <h4 className="font-semibold mb-1">Migration Assessment</h4>
                        <p className="text-foreground/70">We&apos;ll discuss your SharePoint migration and specific validation requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">2</div>
                      <div>
                        <h4 className="font-semibold mb-1">Demo & Trial</h4>
                        <p className="text-foreground/70">Receive a personalized demo and trial access to our validation tools</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">3</div>
                      <div>
                        <h4 className="font-semibold mb-1">Validation Support</h4>
                        <p className="text-foreground/70">Get guidance on implementing post-migration validation best practices</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand text-white rounded-full flex items-center justify-center text-sm font-semibold mt-1">4</div>
                      <div>
                        <h4 className="font-semibold mb-1">Ongoing Partnership</h4>
                        <p className="text-foreground/70">Access to updates, support, and new validation features</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-background/80 backdrop-blur-sm border border-brand/10 rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-6 text-brand">Our Validation Expertise</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                      <span className="text-sm">SharePoint Migration Validation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                      <span className="text-sm">Metadata Integrity Checking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                      <span className="text-sm">Document Property Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                      <span className="text-sm">Taxonomy Verification</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                      <span className="text-sm">Content Type Validation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand rounded-full"></div>
                      <span className="text-sm">Enterprise Reporting</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-brand via-brand-dark to-brand text-white rounded-xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Enterprise Validation Program</h3>
                  <p className="mb-6 text-white/90">Join our enterprise program and get priority access to validation tools and support.</p>
                  <ul className="space-y-2 mb-6 text-white/90">
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Priority technical support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Early access to new features</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Custom validation workflows</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Volume licensing options</span>
                    </li>
                  </ul>
                  <Button variant="secondary" className="bg-white text-brand hover:bg-white/90">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-8 bg-brand/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-foreground/70 italic">
              We typically respond to all inquiries within 4 hours during business days. Enterprise clients receive priority support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}