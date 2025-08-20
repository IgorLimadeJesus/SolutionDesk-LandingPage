export default function Footer() {
  return (
    <footer className="mt-auto border-t border-primary-900">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500">
        © {new Date().getFullYear()} <span className="text-primary-300">SolutionDesk</span>. Todos os direitos reservados.
      </div>
    </footer>
  )
}
