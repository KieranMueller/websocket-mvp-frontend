import { Routes } from '@angular/router';
import { ChatComponent } from './views/chat/chat.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: 'chat' },
];
