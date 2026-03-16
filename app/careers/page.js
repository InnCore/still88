export default function Careers() {
    return (
          <>
    {/* Hero */}
            <section className="relative w-full overflow-hidden" style={{height: '90vh'}}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: "url('http://3.141.1.117/wp-content/uploads/2013/06/join-kriya-revgen.jpg')"}}
        />
        <div className="absolute inset-0 bg-black/50" />
          </section>

{/* Careers Form */}
      <section className="py-16 px-6 bg-white">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-sm tracking-widest uppercase text-gray-700 mb-2">
                    FILL UP FORM BELOW TO APPLY FOR JOB
        </h2>
          <div className="w-48 h-px bg-gray-300 mb-8" />

                  <a
            href="mailto:info@still88.com?subject=Job Application"
            className="inline-block bg-gray-800 text-white text-xs tracking-widest uppercase px-6 py-3 mb-8 hover:bg-gray-700 transition-colors"
          >
                          DOWNLOAD FORM
              </a>

          <form
            action="mailto:info@still88.com"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
                          <div>
                            <label className="block text-sm text-gray-600 mb-1">Name (required)</label>
              <input type="text" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
              </div>
            <div>
                            <label className="block text-sm text-gray-600 mb-1">Phone (required)</label>
              <input type="tel" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
              </div>
            <div>
                            <label className="block text-sm text-gray-600 mb-1">Email (required)</label>
              <input type="email" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
              </div>
            <div>
                            <label className="block text-sm text-gray-600 mb-1">Position Applying For (required)</label>
              <input type="text" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
              </div>
            <div>
                            <label className="block text-sm text-gray-600 mb-1">Location Applying For (required)</label>
              <input type="text" required className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
              </div>
            <div>
                            <label className="block text-sm text-gray-600 mb-1">Upload Your Resume (required)</label>
              <input type="file" required className="w-full text-sm text-gray-600" />
              </div>
            <div>
                            <label className="block text-sm text-gray-600 mb-1">Submit Application Form (required)</label>
              <input type="file" required className="w-full text-sm text-gray-600" />
              </div>
            <div>
                            <label className="block text-sm text-gray-600 mb-1">Comments</label>
              <textarea rows={5} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500" />
              </div>
            <button
              type="submit"
              className="bg-gray-800 text-white text-xs tracking-widest uppercase px-8 py-3 hover:bg-gray-700 transition-colors"
            >
                              APPLY
                </button>
                </form>
                </div>
                </section>
                </>
  )
}
