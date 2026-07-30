import React, { useState } from 'react';
import { Zap, Gauge, Layers } from 'lucide-react';

export const PerformanceCalculator: React.FC = () => {
  const [pages, setPages] = useState<number>(5);
  const [optimizationLevel, setOptimizationLevel] = useState<'standard' | 'extreme'>('extreme');

  const baseSpeedScore = optimizationLevel === 'extreme' ? 99 : 92;
  const loadTime = (0.2 + pages * 0.02 * (optimizationLevel === 'extreme' ? 0.5 : 1)).toFixed(2);
  const bundleSize = (12.4 * (optimizationLevel === 'extreme' ? 0.3 : 1)).toFixed(1);

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Gauge className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Simulador de Rendimiento Core Web Vitals</h3>
            <p className="text-xs text-slate-400">Isla Interactiva de React en Astro (`client:visible`)</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          Lighthouse Score: {baseSpeedScore}/100
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Número de Páginas / Módulos ({pages})
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">
              Modo de Optimización
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setOptimizationLevel('standard')}
                className={`px-3 py-2 text-xs rounded-xl border font-medium transition-all ${
                  optimizationLevel === 'standard'
                    ? 'bg-brand-600 text-white border-brand-500'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                Estándar
              </button>
              <button
                type="button"
                onClick={() => setOptimizationLevel('extreme')}
                className={`px-3 py-2 text-xs rounded-xl border font-medium transition-all ${
                  optimizationLevel === 'extreme'
                    ? 'bg-brand-600 text-white border-brand-500'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                Zero JS (Astro Islands)
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Display */}
        <div className="grid grid-cols-2 gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div className="space-y-1">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> Tiempo de Carga
            </span>
            <p className="text-xl font-bold text-white">{loadTime}s</p>
            <span className="text-[10px] text-emerald-400">FCP / LCP ultra rápido</span>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-brand-400" /> Peso JS Cliente
            </span>
            <p className="text-xl font-bold text-white">{bundleSize} KB</p>
            <span className="text-[10px] text-brand-300">Minimizado por islas</span>
          </div>
        </div>
      </div>
    </div>
  );
};
