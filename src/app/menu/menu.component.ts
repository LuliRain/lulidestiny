import { Component, NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AnalGameComponent } from './anal-game/anal-game.component';
import { GapeGameComponent } from './gape-game/gape-game.component';
import { OralGameComponent } from './oral-game/oral-game.component';
import { WriteGameComponent } from './write-game/write-game.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [RouterLink],
})
export class MenuComponent implements OnInit {
  public bpm: number = 60; // Beats per minute
  public isMuted: boolean = true; // Estado de silencio inicializado en mute
  private intervalId: any;
  private minutes: number = 0;
  private seconds: number = 0;
  private bpmIntervalId: any;
  private audioContext: AudioContext;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private countdownIntervalId: any;
  public countdown: number = 10; // Temporizador de 10 segundos

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }

  ngOnInit(): void {
    this.updateTimerDisplay();
    this.startBPM();
  }

  startTimer() {
    if (this.intervalId || this.countdownIntervalId) {
      return; // Evita múltiples intervalos
    }

    this.countdown = 10; // Reinicia el temporizador de 10 segundos

    this.countdownIntervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.speakCountdown(this.countdown);
      }
      this.countdown--;

      if (this.countdown < 0) {
        clearInterval(this.countdownIntervalId);
        this.countdownIntervalId = null;
        // Iniciar el cronómetro después de que la voz termine de contar
        this.speakCountdown('inicia ya mismo puta estupida!').onend = () => {
          this.startMainTimer();
        };
      }
    }, 1000);
  }

  startMainTimer() {
    this.intervalId = setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        this.speakCountdown(`Ya va${this.minutes > 1 ? 'n' : ''} ${this.minutes} minuto${this.minutes > 1 ? 's' : ''}, puta de mierda!`);
      }
      this.updateTimerDisplay();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    clearInterval(this.countdownIntervalId);
    this.countdownIntervalId = null;
  }

  resetTimer() {
    this.stopTimer();
    this.minutes = 0;
    this.seconds = 0;
    this.updateTimerDisplay();
    this.countdown = 10; // Reinicia el temporizador de 10 segundos
  }

  private updateTimerDisplay() {
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    if (minutesElement && secondsElement) {
      minutesElement.textContent = this.formatTime(this.minutes);
      secondsElement.textContent = this.formatTime(this.seconds);
    }
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  private speakCountdown(count: number | string) {
    const msg = new SpeechSynthesisUtterance(count.toString());
    msg.lang = 'es-ES'; // Idioma español
    msg.rate = 1; // Ajusta la velocidad de la voz
    window.speechSynthesis.speak(msg);
    return msg;
  }

  rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    this.speakCountdown(`Tu destino es el número ${result}. Sucia prostituta de mierda!`);
  }

  startBPM() {
    this.updateBPM();
  }

  updateBPM() {
    if (this.bpmIntervalId) {
      clearInterval(this.bpmIntervalId);
    }
    const bpmDisplay = document.getElementById('bpmDisplay');
    if (bpmDisplay) {
      this.bpmIntervalId = setInterval(() => {
        bpmDisplay.style.opacity = bpmDisplay.style.opacity === '1' ? '0' : '1';
        if (!this.isMuted) {
          this.playBeep();
        }
      }, (60 / this.bpm) * 1000);
    }
  }

  increaseBPM() {
    this.bpm += 10;
    this.updateBPM();
  }

  decreaseBPM() {
    if (this.bpm > 10) {
      this.bpm -= 10;
      this.updateBPM();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  }

  private playBeep() {
    this.oscillator = this.audioContext.createOscillator();
    this.gainNode = this.audioContext.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioContext.destination);
    this.oscillator.frequency.value = 440; // Frecuencia del beep (A4)
    this.oscillator.type = 'sine'; // Tipo de onda
    this.gainNode.gain.setValueAtTime(1, this.audioContext.currentTime);
    this.oscillator.start(this.audioContext.currentTime);
    this.oscillator.stop(this.audioContext.currentTime + 0.1); // Duración del beep
  }
}
