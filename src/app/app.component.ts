import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './initialComponents/hero-section/hero-section.component';
import { FeaturedProductsComponent } from './initialComponents/featured-products/featured-products.component';
import { TestimonialsComponent } from './initialComponents/testimonials/testimonials.component';
import { FooterComponent } from './initialComponents/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroSectionComponent,FeaturedProductsComponent,TestimonialsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'monoshop';
}
