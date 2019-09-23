import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: '../server/server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'hello';
  // Alternate
  // serverId: number = 10;
  // serverStatus:string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
