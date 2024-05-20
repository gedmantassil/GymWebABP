import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <app-chat-bubble></app-chat-bubble>
  `,
})
export class AppComponent {}
