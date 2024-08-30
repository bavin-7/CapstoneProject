import { Component } from '@angular/core';
import { LoginRequest } from '../login-request.model';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest: LoginRequest = { email: '', password: '' };
  emailError: boolean = true;
  passwordError: boolean = true;

  constructor(private userService: UserService, private router: Router) {}

  validateInputs(): boolean {
    this.emailError = !this.loginRequest.email || !/^\S+@\S+\.\S+$/.test(this.loginRequest.email);
    this.passwordError = !this.loginRequest.password || this.loginRequest.password.length < 6;
    return !(this.emailError || this.passwordError);
  }

  login() {
    if (this.validateInputs()) {
      this.userService.login(this.loginRequest).subscribe({
        next: (response) => {
          console.log('Login successful. User ID:', response);
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error('Error logging in:', error);
        }
      });
    } else {
      console.error('Validation failed. Please enter valid email and password.');
    }
  }
}
