import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `
    <h1>ServerName {{ serverName }}</h1>
    <input type="text" class="form-control" [(ngModel)]="serverName" />

    <button
      class="btn btn-primary"
      [disabled]="!allowNewServer"
      (click)="onCreateServer()"
    >
      Add Server
    </button>
    <!--    {{ serverCreationStatus }}-->

    <p *ngIf="serverCreated; else noServer">
      Server was created! Server name is {{ serverName }}
    </p>
    <ng-template #noServer>
      <p>No server was created</p>
    </ng-template>

    <ng-container *ngFor="let server of servers; let i = index">
      <p [ngStyle]="{ backgroundColor: i >= 3 ? getColor() : null }">
        {{ serverName }} is {{ serverStatus }}
      </p>
    </ng-container>
  `,

  styles: [
    `
      button {
        margin: 5px 0;
      }
    `,
  ],
})
export class ServerComponent {
  serverStatus: string = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server';
  serverName: string = 'test';
  serverCreated = false;
  servers = ['petike', 'peti'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverStatus = 'online';
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created Name is' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
