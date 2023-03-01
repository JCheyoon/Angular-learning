import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  template: ` <h1>ServerName {{ serverName }}</h1>
    <!--    <input-->
    <!--      type="text"-->
    <!--      class="form-control"-->
    <!--      (input)="onUpdateServerName($event)"-->
    <!--    />-->
    <input type="text" class="form-control" [(ngModel)]="serverName" />

    <button
      class="btn btn-primary"
      [disabled]="!allowNewServer"
      (click)="onCreateServer()"
    >
      Add Server
    </button>
    {{ serverCreationStatus }}

    <p>Server with ID {{ serverID }} is {{ serverStatus }}</p>`,

  styles: [
    `
      p {
        color: red;
      }
      button {
        margin: 5px 0;
      }
    `,
  ],
})
export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'online';

  allowNewServer = false;
  serverCreationStatus = 'No server';
  serverName: string = 'test';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'server was created Name is' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
