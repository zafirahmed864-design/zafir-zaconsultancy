/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { UnifiedPortfolio } from './components/UnifiedPortfolio';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col relative bg-[#080E1A]">
      {/* Subtle reading progress bar at the very top of the screen */}
      <ReadingProgressBar />

      {/* Unified Master Portfolio (Navy Blue, Teal, Red palette with office work imagery) */}
      <UnifiedPortfolio onOpenResume={() => setIsResumeOpen(true)} />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
