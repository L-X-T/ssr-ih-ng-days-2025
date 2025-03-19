import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ssr-ih-ng19-days';
}
