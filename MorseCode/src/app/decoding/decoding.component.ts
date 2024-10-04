import {Component, signal} from '@angular/core';
import {MorseCodeService} from "../morse-code.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-decoding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './decoding.component.html',
  styleUrl: './decoding.component.css'
})
export class DecodingComponent {
  readonly inputSignal = signal<string>('');
  outputSignal = signal<string>('');
  errorSignal = signal<Error>(new Error(''));

  constructor(private morseCodeService: MorseCodeService) {}

  translate(): void {
    this.errorSignal.set(new Error(''));
    const input = this.inputSignal();
    const output = this.morseCodeService.translateToText(input);
    if(input !== '' && output === '') {
      this.errorSignal.set(new Error('Invalid input'));
    }
    this.outputSignal.set(output);
  }

  sound() {
    this.morseCodeService.translateToSound(this.inputSignal());
  }
}
