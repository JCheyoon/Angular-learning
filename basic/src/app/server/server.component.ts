import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `<p>Server with ID {{ serverID }} is {{ serverStatus }}</p>
    <button class="btn btn-primary" [disabled]="!allowNewServer">
      Add Server
    </button>`,
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'online';

  allowNewServer = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
