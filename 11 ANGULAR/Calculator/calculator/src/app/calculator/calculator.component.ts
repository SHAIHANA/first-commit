
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input: string = '';

  // Display a character to the input
  displayNumber(value: string) {
    this.input += value;
  }

  // Remove the last character from the input
  backspace() {
    if (this.input.length > 0) {
      this.input = this.input.slice(0, -1)// Removes the last character
    }
  }

  // Clear the input
  clearInput() {
    this.input = ''
  }


  // Calculate the result of the input
  calculate(): void {
    
    try {
      this.input = eval(this.input);
    }
    catch (error) {
      this.input = 'Error';
    }
  }
}
