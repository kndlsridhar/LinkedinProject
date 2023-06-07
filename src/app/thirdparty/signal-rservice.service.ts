import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRServiceService {
  private hubConnection: HubConnection;
  private messageReceivedSubject = new Subject<string>();

  constructor() { 
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:22435/NewsHub')
      .build();
  }

  

   
  public startConnection(): Promise<void> {
    return this.hubConnection.start();
  }

  public stopConnection(): Promise<void> {
    return this.hubConnection.stop();
  }

  public onReceiveMessage(callback: (message: string) => void): void {
    debugger;
    this.hubConnection.on('ReceiveMessage', callback);
  }

  public async sendMessage(userId: string, message: string): Promise<void> {
    debugger;
    await this.hubConnection.invoke('SendMessage', userId, message);
  }

   
}