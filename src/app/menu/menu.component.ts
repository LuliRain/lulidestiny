import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public bpm: number = 60; // Beats per minute
  private intervalId: any;
  private minutes: number = 0;
  private seconds: number = 0;
  private bpmIntervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.updateTimerDisplay();
    this.startBPM();
  }

  startTimer() {
    if (this.intervalId) {
      return; // Evita múltiples intervalos
    }
    this.intervalId = setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
      }
      this.updateTimerDisplay();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetTimer() {
    this.stopTimer();
    this.minutes = 0;
    this.seconds = 0;
    this.updateTimerDisplay();
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
}
