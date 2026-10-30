// Simple Web Audio API synthesizer for the ceremonial SENA Anthem fanfare melody
class AnthemPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timeouts: number[] = [];

  public start(onProgress?: (index: number) => void, onComplete?: () => void) {
    if (this.isPlaying) return;
    this.ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    this.isPlaying = true;

    // Melody notes for the upbeat, noble martial cadence of "Estudiantes del SENA adelante..."
    // (F frequencies in Hz: C4, F4, G4, A4, Bb4, C5, etc.)
    const notes = [
      { note: 261.63, dur: 350 }, // C4  Es-
      { note: 349.23, dur: 350 }, // F4  tu-
      { note: 392.00, dur: 350 }, // G4  dian-
      { note: 440.00, dur: 500 }, // A4  tes
      { note: 440.00, dur: 350 }, // A4  del
      { note: 349.23, dur: 350 }, // F4  SE-
      { note: 392.00, dur: 600 }, // G4  NA
      { note: 440.00, dur: 350 }, // A4  a-
      { note: 466.16, dur: 350 }, // Bb4 de-
      { note: 523.25, dur: 600 }, // C5  lan-
      { note: 440.00, dur: 700 }, // A4  te!
      
      { note: 392.00, dur: 350 }, // G4  por
      { note: 440.00, dur: 350 }, // A4  Co-
      { note: 466.16, dur: 350 }, // Bb4 lom-
      { note: 440.00, dur: 350 }, // A4  bia
      { note: 392.00, dur: 350 }, // G4  lu-
      { note: 349.23, dur: 350 }, // F4  chad
      { note: 329.63, dur: 350 }, // E4  con
      { note: 349.23, dur: 800 }, // F4  a-mor!
    ];

    let currentTime = 0;
    notes.forEach((item, index) => {
      const t = window.setTimeout(() => {
        if (!this.isPlaying || !this.ctx) return;
        this.playTone(item.note, item.dur / 1000);
        if (onProgress) onProgress(index);
      }, currentTime);
      this.timeouts.push(t);
      currentTime += item.dur;
    });

    const finishTimeout = window.setTimeout(() => {
      this.stop();
      if (onComplete) onComplete();
    }, currentTime + 500);
    this.timeouts.push(finishTimeout);
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      // Brass-like fanfare timbre using sawtooth with gentle lowpass
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration - 0.02);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext interrupted
    }
  }

  public stop() {
    this.isPlaying = false;
    this.timeouts.forEach(t => clearTimeout(t));
    this.timeouts = [];
    if (this.ctx) {
      try {
        this.ctx.close();
      } catch {
        // Closed
      }
      this.ctx = null;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const anthemPlayer = new AnthemPlayer();
