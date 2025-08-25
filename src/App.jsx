import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { CheckCircle, Users, Target, TrendingUp, Zap, MessageCircle, Brain, Calculator, BarChart3, Shield, Lightbulb } from 'lucide-react'
import heroImage from './assets/7f63QCGE7DbX.jpg'
import aiImage from './assets/NKloRgzwxqzi.jpg'
import techImage from './assets/nhRvUTtxwhSM.webp'

function App() {
  const whatsappNumber = "+51982035632"
  const whatsappMessage = "Hola, estoy interesado en el Curso-Taller de IA Generativa para Contadores. ¿Podrías darme más información?"
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`

  const objectives = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Dominio de Herramientas IA",
      description: "Aprenderás a utilizar eficazmente herramientas de IA generativa, GPTs y conocerás los beneficios de las automatizaciones Inteligentes (RPA y agentes IA)."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automatización de Tareas",
      description: "Descubrirás cómo automatizar la generación de reportes, análisis financieros y auditorías."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Mejora en la Comunicación",
      description: "Potenciarás tus habilidades para crear documentos y presentaciones impactantes con ayuda de la IA."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Optimización de Procesos",
      description: "Aprenderás a integrar la IA en tus flujos de trabajo para aumentar la eficiencia y precisión."
    }
  ]

  const benefits = [
    "Optimización de Procesos Contables",
    "Desarrollo de Nuevas Competencias Digitales",
    "Mejora en la Toma de Decisiones",
    "Incremento en la Productividad Profesional",
    "Ventaja Competitiva y Diferenciación"
  ]

  const tools = [
    "ChatGPT", "Gemini", "Grok", "Deepseek", "Gamma", "Manus", 
    "Claude", "Perplexity", "Canva", "Make", "N8N"
  ]

  const targetAudience = [
    "Contadores Públicos",
    "Estudiantes de contabilidad o carreras afines",
    "Auditores financieros y tributarios",
    "Gerentes de administración y finanzas",
    "Profesores de contabilidad o auditoría",
    "Consultores de gestión y cumplimiento"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.6)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Curso-Taller: <span className="text-blue-200">IA Generativa</span> aplicada a Contadores
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Revoluciona tu profesión con la IA: Optimiza procesos, automatiza tareas y potencia tu rol estratégico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              ¡Inscríbete Ahora!
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('info').scrollIntoView({ behavior: 'smooth' })}
            >
              Más Información
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">6 Horas</div>
              <div className="text-blue-200">Duración Total</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">3 Sesiones</div>
              <div className="text-blue-200">Formato Práctico</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">Enfoque Local</div>
              <div className="text-blue-200">Casos Peruanos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="info" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">¿Para Quién es Este Curso?</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Diseñado específicamente para profesionales contables en todas sus especialidades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900">{audience}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Lo que Aprenderás</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Objetivos claros y resultados medibles para tu desarrollo profesional
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                      {objective.icon}
                    </div>
                    <CardTitle className="text-blue-900">{objective.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700 text-base">
                    {objective.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Beneficios Clave</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Transforma tu carrera profesional con ventajas competitivas reales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Herramientas que Exploraremos</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Las mejores herramientas de IA del mercado para potenciar tu trabajo
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300">
                {tool}
              </Badge>
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={aiImage} 
                alt="Herramientas de IA" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <img 
                src={techImage} 
                alt="Tecnología contable" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Revolucionar tu Profesión?</h2>
          <p className="text-xl mb-8 text-blue-100">
            No te quedes atrás en la revolución de la IA. Únete a este curso-taller y transforma tu manera de trabajar.
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Escríbeme por WhatsApp: {whatsappNumber}
          </Button>
          <p className="mt-6 text-blue-200">
            Respuesta inmediata • Información detallada • Inscripción fácil
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-blue-950 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Curso-Taller: IA Generativa para Contadores</h3>
          <p className="text-blue-200 mb-6">
            Transformando profesionales contables con la potencia de la Inteligencia Artificial
          </p>
          <div className="flex justify-center items-center gap-2 text-blue-300">
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp: {whatsappNumber}</span>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-blue-400 text-sm">
            © 2025 Curso-Taller IA Generativa para Contadores. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
