import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onButtonClick = (): void => {
    this.password = this.generatePassword();
  };

  generatePassword = (): string => {
    const numbers = `1234567890`;
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    const symbols = `!@#$%^&*()`;

    let validChars = "";
    if(this.includeLetters) validChars += letters;
    if(this.includeNumbers) validChars += numbers;
    if(this.includeSymbols) validChars += symbols;

    let pwd = '';
    for(let i=0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      pwd += validChars[index];
    }
    return pwd;
  };


  onChangeLength = (pwdLength: string): void => {
    const _number = parseInt(pwdLength);

    this.length = isNaN(_number) ? 0 : _number;
  };

  onChangeChecks = (name: string): void => {
    switch (name) {
      case "letters":
        this.includeLetters = !this.includeLetters;
        break;
      case "numbers":
        this.includeNumbers = !this.includeNumbers;
        break;
      case "symbols":
        this.includeSymbols = !this.includeSymbols;
        break;
    }
  };


}
