import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: '../server/server.component.html'
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  // Alternate
  // serverId: number = 10;
  // serverStatus:string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
