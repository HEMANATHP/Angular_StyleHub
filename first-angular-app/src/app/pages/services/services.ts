import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { groomingServices } from '../../data/grooming-services';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services = groomingServices;
}
