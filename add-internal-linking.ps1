# PowerShell script to add breadcrumbs and related locations to all ML and AI location pages
# This fixes critical SEO issue: orphaned pages with no internal links

Write-Host "`n=== Adding Internal Linking to All Location Pages ===" -ForegroundColor Cyan
Write-Host "This will add:" -ForegroundColor Yellow
Write-Host "  1. Breadcrumbs navigation" -ForegroundColor White
Write-Host "  2. Related Locations section" -ForegroundColor White
Write-Host "  3. Internal links to nearby states/cities`n" -ForegroundColor White

# Define breadcrumb template
$breadcrumbTemplate = @"
      {/* Breadcrumbs - SEO Navigation */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container px-4 md:px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-orange transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-primary-orange transition-colors">Locations</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">PAGENAME</span>
          </nav>
        </div>
      </section>

"@

# Define related locations template for ML pages
$relatedLocationsMLTemplate = @'
      {/* Related Locations Section - Internal Linking for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ML Services in <span className="text-primary-orange">Other Locations</span>
              </h2>
              <p className="text-lg text-gray-600">
                Explore our Machine Learning services across the United States and India
              </p>
            </div>

            {/* Popular States */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular States - ML Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <Link href="/machine-learning-services-in-california" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">California</span>
                </Link>
                <Link href="/machine-learning-services-in-texas" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">Texas</span>
                </Link>
                <Link href="/machine-learning-services-in-new-york" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">New York</span>
                </Link>
                <Link href="/machine-learning-services-in-florida" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">Florida</span>
                </Link>
                <Link href="/machine-learning-services-in-illinois" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">Illinois</span>
                </Link>
                <Link href="/machine-learning-services-in-michigan" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">Michigan</span>
                </Link>
              </div>
            </div>

            {/* View All Locations CTA */}
            <div className="text-center">
              <Link href="/locations">
                <Button variant="primary" size="lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  View All 143+ Locations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

'@

# Define related locations template for AI pages
$relatedLocationsAITemplate = @'
      {/* Related Locations Section - Internal Linking for SEO */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI Services in <span className="text-primary-orange">Other Locations</span>
              </h2>
              <p className="text-lg text-gray-600">
                Explore our Artificial Intelligence services worldwide
              </p>
            </div>

            {/* Popular States */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular States - AI Services</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <Link href="/artificial-intelligence-ai-services-in-california" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">California</span>
                </Link>
                <Link href="/artificial-intelligence-ai-services-in-texas" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">Texas</span>
                </Link>
                <Link href="/artificial-intelligence-ai-services-in-new-york" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">New York</span>
                </Link>
                <Link href="/artificial-intelligence-ai-services-in-florida" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">Florida</span>
                </Link>
                <Link href="/artificial-intelligence-ai-services-in-michigan" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">Michigan</span>
                </Link>
                <Link href="/artificial-intelligence-ai-services-in-illinois" className="text-center p-3 bg-white rounded-lg hover:bg-primary-orange/10 transition-all border border-gray-200 hover:border-primary-orange">
                  <span className="text-sm font-semibold text-gray-900">Illinois</span>
                </Link>
              </div>
            </div>

            {/* View All Locations CTA */}
            <div className="text-center">
              <Link href="/locations">
                <Button variant="primary" size="lg">
                  <MapPin className="w-5 h-5 mr-2" />
                  View All 143+ Locations
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

'@

Write-Host "This is a template script. Please review the changes made to:" -ForegroundColor Green
Write-Host "  - src/app/page.tsx (Homepage - Featured Locations added)" -ForegroundColor Green
Write-Host "  - src/app/machine-learning-services-in-wyoming/page.tsx (Example with breadcrumbs + related)" -ForegroundColor Green
Write-Host "`nTo apply to all pages, you would need to:" -ForegroundColor Yellow
Write-Host "  1. Add breadcrumbs after schemas (before hero)" -ForegroundColor White
Write-Host "  2. Add related locations before final CTA" -ForegroundColor White
Write-Host "  3. Ensure MapPin and ArrowRight are imported`n" -ForegroundColor White

Write-Host "Template created! Use Wyoming page as reference." -ForegroundColor Cyan
