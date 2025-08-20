import { motion } from 'framer-motion'
import Nav from './components/Nav.jsx'
import FeatureCard from './components/FeatureCard.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Nav />
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-ring pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
          <motion.img
            src="/SolutionDesk.png"
            alt="Logo SolutionDesk"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 drop-shadow-[0_0_25px_rgba(139,61,255,0.8)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Atendimento que encanta. Tecnologia que escala.
          </motion.h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A <span className="text-primary-300 font-semibold">SolutionDesk</span> é especialista em sistemas de Help Desk —
            velocidade, confiabilidade e insights que elevam a experiência do seu cliente.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#contato" className="px-6 py-3 rounded-2xl bg-primary-600 hover:bg-primary-700 transition shadow-neon">
              Solicitar Demonstração
            </a>
            <a href="#recursos" className="px-6 py-3 rounded-2xl border border-primary-500 hover:bg-primary-800/30 transition">
              Conheça os Recursos
            </a>
          </div>
        </div>
      </header>

      <section id="recursos" className="py-20 bg-[#101010]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-300 mb-10 text-center">
            Por que escolher a SolutionDesk?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard title="Atendimento Ágil" desc="SLA configurável, automações inteligentes e prioridades dinâmicas para zerar filas." />
            <FeatureCard title="Relatórios Inteligentes" desc="Dashboard com métricas, NPS, CSAT e produtividade em tempo real." />
            <FeatureCard title="Escalabilidade" desc="Multicanal, múltiplos times e integrações simples via API e Webhooks." />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-300 mb-4">Integrações sem dor de cabeça</h3>
            <p className="text-gray-300">
              Conecte a SolutionDesk aos seus sistemas favoritos: CRM, ERP, chat, e-mail e telefonia.
              Reduza retrabalho com rotas automatizadas e base de conhecimento integrada.
            </p>
            <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
              <li>API REST completa e bem documentada</li>
              <li>Webhooks e eventos em tempo real</li>
              <li>SSO (OAuth2, SAML) e permissões granulares</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary-800/40 to-primary-600/20 p-6 rounded-2xl border border-primary-800 shadow-neon">
            <div className="grid grid-cols-2 gap-4 text-center">
              <Stat kpi="95%" label="Satisfação do cliente" />
              <Stat kpi="40%" label="Redução de tempo de resposta" />
              <Stat kpi="24/7" label="Disponibilidade" />
              <Stat kpi="∞" label="Escalável" />
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 bg-[#101010]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-primary-300 mb-4">Pronto para transformar seu suporte?</h3>
          <p className="text-gray-300 mb-8">Deixe seu e-mail que entraremos em contato com uma demonstração personalizada.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" required placeholder="seuemail@empresa.com"
              className="w-full sm:w-96 px-4 py-3 rounded-2xl bg-[#0f0f10] border border-primary-800 outline-none focus:ring-2 focus:ring-primary-600" />
            <button className="px-6 py-3 rounded-2xl bg-primary-600 hover:bg-primary-700 transition shadow-neon">
              Quero ver na prática
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Sem spam. Você pode cancelar quando quiser.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="p-5 rounded-xl bg-[#0f0f10] border border-primary-900">
      <div className="text-3xl font-extrabold text-primary-300">{kpi}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  )
}
