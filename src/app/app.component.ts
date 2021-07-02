import { Component } from '@angular/core';
import { Keypair } from '@solana/web3.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solana-web3-angular-error';

  constructor() {
    let keypair = new Keypair();
    console.log(keypair);
  }
}
