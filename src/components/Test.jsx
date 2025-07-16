const Test = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">
          Portfolio Test Page
        </h1>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Styling Test
          </h2>
          <p className="text-gray-300 mb-4">
            If you can see this styled properly, the Tailwind CSS is working.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Button Test
            </button>
            <div className="px-4 py-2 bg-slate-700 text-gray-300 rounded-lg">
              Badge Test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test; 