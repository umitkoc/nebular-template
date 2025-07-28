import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
 users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
     { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' }
  ];

    messages = [
    {
      text: 'Merhaba! Size nasıl yardımcı olabilirim?',
      date: new Date(),
      sender: 'Asistan',
      isUser: false,
    }
  ];



  sendMessage(event: { message: string }) {
    const userMessage = {
      text: event.message,
      date: new Date(),
      sender: 'Siz',
      isUser: true,
    };

    this.messages.push(userMessage);

    setTimeout(() => {
      this.messages.push({
        text: `Cevabınız alındı: "${event.message}"`,
        date: new Date(),
        sender: 'Asistan',
        isUser: false,
      });
    }, 1000);
  }

  onUserClick(name: string) {
    alert(`Kullanıcı: ${name}`);
  }
}
