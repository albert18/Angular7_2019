import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No SERVER was created!';
  ServerName = 'TestServer';
  ServerCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.ServerCreated = true;
    this.serverCreationStatus = 'SERVER was created! Name is ' + this.ServerName;
  }

  onUpdateServerName(event: any) {
    this.ServerName = event.target.value;
  }
}
