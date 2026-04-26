import { SplineSceneBasic } from './components/spline-demo'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-6xl space-y-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Spline 3D Integration
          </h1>
          <p className="mt-4 text-xl text-slate-400">Interactive 3D powered by Spline</p>
        </div>

        <SplineSceneBasic />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🎨', title: 'Beautiful Design', desc: 'Stunning 3D scenes that captivate your audience' },
            { icon: '⚡', title: 'Performance',      desc: 'Lazy loading with React Suspense for fast load times' },
            { icon: '📱', title: 'Responsive',       desc: 'Works seamlessly on all devices and screen sizes' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold mb-2">{icon} {title}</h3>
              <p className="text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
