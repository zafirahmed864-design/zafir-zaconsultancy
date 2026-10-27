import React, { useState } from 'react';
import { Layers, Sparkles, BookOpen, Zap, Info, Check, Sun, Moon } from 'lucide-react';

export type DesignOption = 'A' | 'B' | 'C';

interface DesignSwitcherProps {
  currentOption: DesignOption;
  onSelectOption: (option: DesignOption) => void;
  isDarkOverride?: boolean;
  onToggleDarkOverride?: () => void;
}

export const DesignSwitcher: React.FC<DesignSwitcherProps> = ({
  currentOption,
  onSelectOption,
  isDarkOverride,
  onToggleDarkOverride,
}) => {
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const options = [
    {
      id: 'A' as DesignOption,
      name: 'Option A: Dark Premium',
      shortName: 'Option A',
      themeBadge: '#0B1220 · Electric Blue',
      accentColor: '#3B82F6',
      icon: Sparkles,
      description: 'Background #0B1220, accent Electric Blue #3B82F6, text #F8FAFC. Subtle gradients, glass cards, smooth animations.',
      layoutStyle: 'High-tech glassmorphism & soft gradient illumination with split hero card.',
    },
    {
      id: 'B' as DesignOption,
      name: 'Option B: Light Editorial',
      shortName: 'Option B',
      themeBadge: '#FAFAF9 · Deep Teal',
      accentColor: '#0F766E',
      icon: BookOpen,
      description: 'Background #FAFAF9, accent Deep Teal #0F766E, text #1F2937. Lots of whitespace, large typography, clean and trustworthy.',
      layoutStyle: 'Broadsheet editorial layout, generous airy margins, refined serif headlines & hairline dividers.',
    },
    {
      id: 'C' as DesignOption,
      name: 'Option C: Bold Modern',
      shortName: 'Option C',
      themeBadge: '#0A0A0A · Emerald',
      accentColor: '#10B981',
      icon: Zap,
      description: 'Background #0A0A0A, accent Emerald #10B981, white text. Big headline, strong contrast, minimal.',
      layoutStyle: 'High-contrast brutalist-refined typography, asymmetric Bento grid & razor-sharp emerald accents.',
    },
  ];

  return (
    <>
      {/* Top Banner Bar for Comparing Options */}
      <div className="relative z-40 bg-zinc-950/95 text-zinc-100 border-b border-zinc-800/80 backdrop-blur-md px-3 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          {/* Label & Instructions */}
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 font-semibold text-zinc-200">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Design Comparison Preview:</span>
            </span>
            <span className="hidden lg:inline text-zinc-400">
              Select one of the 3 requested layout variations below to review in full.
            </span>
          </div>

          {/* Option Selector Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800">
            {options.map((opt) => {
              const Icon = opt.icon;
              const isActive = currentOption === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => onSelectOption(opt.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-zinc-800 text-white shadow-xs ring-1 ring-white/20'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: opt.accentColor }}
                    aria-hidden="true"
                  />
                  <span>{opt.shortName}</span>
                  {isActive && (
                    <span className="hidden sm:inline text-2xs text-zinc-400 font-normal">
                      ({opt.id === 'A' ? 'Dark' : opt.id === 'B' ? 'Editorial' : 'Bold'})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Actions: Compare Details & Dark/Light Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowComparisonModal(true)}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors"
              title="Compare all 3 design choices side by side"
            >
              <Info className="w-3.5 h-3.5 text-zinc-400" />
              <span>Compare 3 Options</span>
            </button>

            {onToggleDarkOverride && (
              <button
                onClick={onToggleDarkOverride}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                title="Toggle Dark / Light Mode"
                aria-label="Toggle Dark / Light Mode"
              >
                {isDarkOverride ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-blue-300" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Comparison Modal */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl bg-zinc-950 text-white rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6"
            role="dialog"
            aria-modal="true"
            aria-label="Design Comparison Matrix"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  3 Design Approaches for Zafir Ahmed
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Each option uses the exact same verified content and client proof, but presents a unique visual architecture and tone.
                </p>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {options.map((opt) => {
                const Icon = opt.icon;
                const isSelected = currentOption === opt.id;
                return (
                  <div
                    key={opt.id}
                    className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${
                      isSelected
                        ? 'border-blue-500/80 bg-zinc-900/90 ring-1 ring-blue-500/40'
                        : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" style={{ color: opt.accentColor }} />
                          <span className="text-sm font-bold">{opt.shortName}</span>
                        </div>
                        {isSelected && (
                          <span className="flex items-center gap-1 text-2xs font-semibold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-800/60">
                            <Check className="w-3 h-3" /> Active
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-mono-numbers px-2 py-1 rounded bg-black/40 text-zinc-300 border border-zinc-800">
                        {opt.themeBadge}
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {opt.description}
                      </p>

                      <div className="pt-2 border-t border-zinc-800/60">
                        <span className="text-2xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                          Layout & Feel
                        </span>
                        <p className="text-xs text-zinc-400">{opt.layoutStyle}</p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4">
                      <button
                        onClick={() => {
                          onSelectOption(opt.id);
                          setShowComparisonModal(false);
                        }}
                        className={`w-full py-2 rounded-lg text-xs font-semibold transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                        }`}
                      >
                        {isSelected ? 'Currently Viewing' : `Switch to ${opt.shortName}`}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
              <span>Goal: Win high-value US & international remote contracts</span>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="text-zinc-400 hover:text-white"
              >
                Close Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
