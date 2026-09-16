import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const intervalRef = useRef<number | null>(null);

  // Web Audio ambient Indian Tanpura + Bansuri harmonic synthesizer
  const startAudio = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Indian Tanpura root frequencies (Key of D / Sa: ~146.83 Hz, Pa: ~220 Hz, High Sa: ~293.66 Hz)
      const droneNotes = [146.83, 220.0, 293.66, 440.0];
      const oscs: OscillatorNode[] = [];

      droneNotes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        // Warm sine and triangle harmonics
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle swelling LFO amplitude
        noteGain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);
        osc.connect(noteGain);
        noteGain.connect(masterGain);
        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;

      // Soft melodic bansuri flute note simulation on Raag Yaman / Bhupali scale
      const ragaNotes = [293.66, 329.63, 369.99, 440.0, 493.88, 587.33];
      intervalRef.current = window.setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        const randomNote = ragaNotes[Math.floor(Math.random() * ragaNotes.length)];
        const fluteOsc = ctx.createOscillator();
        const fluteGain = ctx.createGain();

        fluteOsc.type = 'sine';
        fluteOsc.frequency.setValueAtTime(randomNote, ctx.currentTime);

        fluteGain.gain.setValueAtTime(0.001, ctx.currentTime);
        fluteGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.8);
        fluteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.2);

        fluteOsc.connect(fluteGain);
        fluteGain.connect(masterGain);

        fluteOsc.start();
        fluteOsc.stop(ctx.currentTime + 3.3);
      }, 3500);

      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore
      }
    });
    oscillatorsRef.current = [];
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch {
        // ignore
      }
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={togglePlay}
        type="button"
        aria-label={isPlaying ? 'Mute ambient wedding music' : 'Play ambient wedding music'}
        className={`group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-maroon-rich backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
          isPlaying
            ? 'bg-maroon-900/90 text-amber-200 border-gold-400'
            : 'bg-ivory-50/90 text-royalbrown-900 border-gold-500/40 hover:border-gold-500'
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-royalbrown-800/70" />
        )}

        {/* Animated equalizer bars when playing */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-3.5" aria-hidden="true">
            <span className="w-0.5 bg-gold-400 animate-[bounce_1s_infinite_100ms] h-full" />
            <span className="w-0.5 bg-gold-400 animate-[bounce_1s_infinite_300ms] h-2/3" />
            <span className="w-0.5 bg-gold-400 animate-[bounce_1s_infinite_200ms] h-4/5" />
            <span className="w-0.5 bg-gold-400 animate-[bounce_1s_infinite_400ms] h-1/2" />
          </div>
        ) : (
          <span className="text-[11px] font-sans font-medium uppercase tracking-wider">
            Shehnai &bull; Music
          </span>
        )}

        {/* Play indicator tooltip on hover */}
        <span className="sr-only">
          {isPlaying ? 'Wedding Shehnai is Playing' : 'Click to Play Wedding Shehnai'}
        </span>
      </button>
    </div>
  );
};
