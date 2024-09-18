import Image from 'next/image'

export default function LandingPage() {
    return (
      <div className="min-h-screen flex flex-col bg-white">
<header className="bg-orange-100 py-4">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-40 h-12 relative">
            <Image
              src="/logo-color.png?height=48&width=160"
              alt="Marigold Auditing Logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
        </div>
      </header>
  
        <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12 relative overflow-hidden rounded-lg shadow-lg">
          <div className="absolute inset-0">
            <img
              src="/background-image.jpg"
              alt="Marigold Auditing background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-orange-600 bg-opacity-75"></div>
          </div>
          <div className="relative z-10 p-12 md:p-16 lg:p-20 text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">MARIGOLD</h2>
            <p className="text-orange-50 text-xl mx-auto max-w-3xl">
              Društvo za reviziju i konsalting
            </p>
          </div>
        </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontakt</h2>
            <div className="bg-orange-100 p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">info@revizijamarigold.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">+387 51-213-840</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">+387 65 695 207</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">Aleja Svetog Save broj 59, 78000, BANJA LUKA, Bosna</span>
                </div>
              </div>
            </div>
          </section>
        </main>
  
        <footer className="bg-gray-100 py-4 mt-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            © {new Date().getFullYear()} MARIGOLD. Sva Prava Zadržana.
          </div>
        </footer>
      </div>
    )
  }