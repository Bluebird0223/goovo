export default async function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-6 tracking-tighter">
          Share Your Journey on <span className="text-[#90ee90]">Goovo</span>
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
          The next generation social platform for travelers and adventurers. Connect with people from all over the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-[#90ee90] mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Explore the World</h3>
            <p className="text-gray-500">Discover amazing places and stories shared by our global community.</p>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Connect with Locals</h3>
            <p className="text-gray-500">Chat with travelers and locals to get the best tips for your next trip.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
