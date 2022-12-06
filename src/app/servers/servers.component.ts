import { Component, OnInit } from '@angular/core';
import { env } from 'process';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatuts = 'server was not created';
  serverName = 'summa';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onNewServerClick() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatuts = 'Server was created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
