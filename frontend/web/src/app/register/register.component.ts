import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = {};

  constructor(private userService: UserService, private router: Router) { }

  register() {
    console.log('Registering user:', this.user);
    this.userService.registerUser(this.user).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/login']);  // Navigate to login after successful registration
      },
      error: (error) => {
        console.error('Error registering user:', error);
      }
    });
  }

// navigateToFeature(feature: string) {
//     Navigate to the route based on the feature parameter
//     this.router.navigate([`/${feature}`]);
//   }
}
