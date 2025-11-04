import Button from "@/components/Button";

export default function Home()
{
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 via-stone-50/30 to-blue-50/40 dark:from-purple-950/40 dark:via-blue-950/30 dark:to-pink-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

          {/* Animated background shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand/15 to-rose-300/20 dark:from-purple-500/25 dark:to-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-60 dark:opacity-40 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-orange-200/25 to-stone-300/20 dark:from-pink-500/25 dark:to-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-60 dark:opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-brand/15 dark:from-blue-500/25 dark:to-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-60 dark:opacity-40 animate-blob animation-delay-4000"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-40 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-300/20 to-pink-300/15 dark:from-purple-500/20 dark:to-pink-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-50 dark:opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-tl from-blue-300/20 to-purple-300/15 dark:from-blue-500/20 dark:to-purple-500/15 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl opacity-50 dark:opacity-30 animate-blob"></div>
          <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-300/15 to-blue-300/20 dark:from-pink-500/15 dark:to-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-40 dark:opacity-25 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-rose-300/15 to-orange-300/20 dark:from-pink-500/15 dark:to-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-25 animate-blob animation-delay-2000"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              
              {/* Problem Statement Badge */}
              <div className="inline-flex items-center gap-2 bg-error/10 dark:bg-error/20 border border-error/30 dark:border-error/40 text-error dark:text-error/90 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Did Your Migration Lose Critical Metadata?
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-brand to-brand/70 dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 bg-clip-text text-transparent animate-fade-in-up">
                Verify & Fix SharePoint Migration Metadata
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 mb-4 max-w-3xl mx-auto animate-fade-in-up delay-200">
                Detect missing or corrupted document properties after migration—then automatically repair them.
              </p>
              
              {/* Value Props */}
              <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm animate-fade-in-up delay-200">
                <div className="flex items-center gap-2 text-foreground/80">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Free Scanner
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Batch Repair
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Compliance Ready
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                <Button variant="brand" className="sm:w-auto group relative overflow-hidden">
                  <span className="relative z-10">Download Free Scanner</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-light to-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Button>
                <Button variant="secondary" className="sm:w-auto border-2 border-brand/20 hover:border-brand/40 hover:bg-brand/5 transition-all duration-300">
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-background-alt/40 to-background-alt/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-brand to-accent dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 bg-clip-text text-transparent">Key Features</h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Comprehensive tools for SharePoint migration metadata validation and repair
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500 hover:-translate-y-2 hover:border-brand/50">
                <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-brand transition-colors">Metadata Scanning</h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  Compares Office document properties with SharePoint Online metadata to identify discrepancies
                  that may have occurred during migration.
                </p>
              </div>

              <div className="group bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 hover:border-accent/50">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">Automated Repair</h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  Licensed version includes tools to automatically correct common metadata issues
                  and synchronize properties between documents and SharePoint.
                </p>
              </div>

              <div className="group bg-surface/80 backdrop-blur-sm border border-border rounded-xl p-8 hover:shadow-2xl hover:shadow-success/10 transition-all duration-500 hover:-translate-y-2 hover:border-success/50">
                <div className="w-12 h-12 bg-gradient-to-br from-success to-success/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-success transition-colors">Detailed Reports</h3>
                <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                  Generate comprehensive reports documenting scan results, identified issues,
                  and any corrections made during the repair process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gradient-to-b from-background-alt/30 to-background-alt/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-brand to-accent dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 bg-clip-text text-transparent">Licensing Options</h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Choose the option that best fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-surface/90 backdrop-blur-sm border border-border rounded-xl p-8 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 hover:border-brand/50">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Scanner</h3>
                  <div className="text-4xl font-bold text-brand mb-4">Free</div>
                  <p className="text-foreground-muted mb-8">
                    Identify metadata discrepancies in your SharePoint migration
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/90">Scan Office documents</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/90">Identify metadata issues</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/90">Generate reports</span>
                    </li>
                  </ul>
                  <Button className="w-full">Download Tool</Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand/10 to-accent/10 dark:from-pink-500/20 dark:to-blue-500/20 border border-brand/40 dark:border-pink-500/60 rounded-xl p-8 hover:shadow-xl hover:shadow-brand/20 dark:hover:shadow-pink-500/20 transition-all duration-300 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand to-accent dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Licensed Version
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Repair Tool</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand to-accent dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 bg-clip-text text-transparent mb-4">Contact Sales</div>
                  <p className="text-foreground-muted mb-8">
                    Scanner functionality plus automated repair capabilities
                  </p>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/90">All scanner features</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/90">Automated metadata repair</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/90">Batch processing</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-success mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/90">Priority support</span>
                    </li>
                  </ul>
                  <Button variant="secondary" className="w-full">Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Why Choose Us Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-brand/10 to-transparent dark:from-purple-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-brand/5 to-transparent dark:from-pink-500/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-brand dark:from-pink-500 dark:via-purple-500 dark:to-blue-500 bg-clip-text text-transparent">
                  Why Check Your Migration?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300">
                      <h3 className="font-semibold mb-2 group-hover:text-brand transition-colors">Peace of Mind</h3>
                      <p className="text-foreground/70">
                        Know that your migration was successful and all your important document information
                        made it safely to SharePoint Online.
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
                      <h3 className="font-semibold mb-2 group-hover:text-brand transition-colors">Spot Issues Early</h3>
                      <p className="text-foreground/70">
                        Find any problems before your users do. Quick scans can identify issues
                        that might cause headaches down the road.
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
                      <h3 className="font-semibold mb-2 group-hover:text-brand transition-colors">Confidence in Your Data</h3>
                      <p className="text-foreground/70">
                        Get clear confirmation that your migration was successful and your team can
                        trust the data in your new SharePoint environment.
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
      </main>
    </>
  );
}
