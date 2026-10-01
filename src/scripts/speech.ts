/**
 * Pronunciation via the browser's built-in SpeechSynthesis API.
 * No audio files, no third-party TTS service, no network request - the voice
 * is whatever the user's own device already ships.
 *
 * Loaded as its own chunk, imported on the first Pronounce click.
 */

export function isSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const lang = (v: SpeechSynthesisVoice) => v.lang?.toLowerCase() ?? '';
  return (
    voices.find((v) => lang(v).startsWith('en-us') && v.localService) ??
    voices.find((v) => lang(v).startsWith('en')) ??
    voices[0]
  );
}

export function speak(name: string): void {
  if (!isSupported()) return;
  const synth = window.speechSynthesis;
  synth.cancel(); // never queue up a backlog of clicks
  const utterance = new SpeechSynthesisUtterance(name);
  utterance.lang = 'en-US';
  utterance.rate = 0.85; // a called name is slower than read prose
  utterance.pitch = 1;
  const voice = pickVoice();
  if (voice) utterance.voice = voice;
  synth.speak(utterance);
}

/**
 * Voice lists populate asynchronously in Chrome; touching them early means the
 * first click gets a real voice rather than the default.
 */
export function warmUp(): void {
  if (!isSupported()) return;
  window.speechSynthesis.getVoices();
}
