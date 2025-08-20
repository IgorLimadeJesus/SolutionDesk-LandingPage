export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-black/40 border-b border-primary-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/SolutionDesk.png" alt="Logo" className="w-8 h-8" />
          <span className="font-semibold text-primary-300">SolutionDesk</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-gray-300">
          <a className="hover:text-white" href="#recursos">Recursos</a>
          <a className="hover:text-white" href="#contato">Contato</a>
          <a className="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 shadow-neon" href="#contato">
            Demo
          </a>
        </div>
      </div>
    </nav>
  )
}
