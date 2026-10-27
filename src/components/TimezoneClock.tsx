import React, { useState, useEffect } from 'react';
import { Clock, Globe } from 'lucide-react';

interface TimezoneClockProps {
  themeStyle?: 'dark' | 'light' | 'emerald';
}

export const TimezoneClock: React.FC<TimezoneClockProps> = ({ themeStyle = 'dark' }) => {
  const [times, setTimes] = useState({
    est: '',
    pst: '',
    isBusinessHours: true,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const estFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      const pstFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      // Check if within US business hours roughly (8 AM - 6 PM EST)
      const estHourFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        hour12: false,
      });
      const estHour = parseInt(estHourFormatter.format(now), 10);
      const isBusiness = estHour >= 8 && estHour <= 19;

      setTimes({
        est: estFormatter.format(now),
        pst: pstFormatter.format(now),
        isBusinessHours: isBusiness,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStyleClasses = () => {
    switch (themeStyle) {
      case 'light':
        return 'bg-stone-100/90 border-stone-200 text-stone-700';
      case 'emerald':
        return 'bg-zinc-900 border-zinc-800 text-zinc-300';
      case 'dark':
      default:
        return 'bg-slate-900/80 border-slate-700/60 text-slate-300';
    }
  };

  const getAccentColor = () => {
    switch (themeStyle) {
      case 'light':
        return 'text-teal-700';
      case 'emerald':
        return 'text-emerald-400';
      case 'dark':
      default:
        return 'text-blue-400';
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border text-xs backdrop-blur-sm shadow-xs ${getStyleClasses()}`}
      title="Live US business hours alignment"
    >
      <div className="flex items-center gap-1.5 font-medium">
        <span
          className={`inline-block w-2 h-2 rounded-full ${
            times.isBusinessHours ? 'bg-emerald-500' : 'bg-amber-400'
          }`}
          aria-hidden="true"
        />
        <span>US Active Coverage</span>
      </div>
      <span className="text-zinc-400" aria-hidden="true">·</span>
      <div className="flex items-center gap-2 font-mono-numbers">
        <span className="flex items-center gap-1">
          <Clock className={`w-3.5 h-3.5 ${getAccentColor()}`} />
          <span className="font-semibold">{times.est || '9:00 AM'}</span> EST
        </span>
        <span className="text-zinc-400" aria-hidden="true">/</span>
        <span>
          <span className="font-semibold">{times.pst || '6:00 AM'}</span> PST
        </span>
      </div>
    </div>
  );
};
