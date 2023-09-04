import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/authentication/service/auth.service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  username: string = ''; // Add this line to define the 'username' variable
  showPassword: boolean = false;
  UserAuthReq: any;
  public loading: boolean = false;

  loginForm: FormGroup;
  password: string = '';
  btnLogin: string = 'LogIn';
  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,

    private jwtHelper: JwtHelperService
  ) {
    this.UserAuthReq = { UserName: '', Password: '' };

    this.loginForm = this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          // Validators.minLength(6),
          // Validators.maxLength(10)
        ],
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          // 2. check whether the entered password has a number
        ]),
      ],
    });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  ngOnInit() {
    // Retrieve the JSON data from localStorage
    const storedDataString = localStorage.getItem('myData');

    if (storedDataString) {
      const storedData = JSON.parse(storedDataString);
      console.log(storedData); // Output: { key1: 'value1', key2: 'value2' }
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log('button clicked');
   
    this.btnLogin = 'verifying...';
    if (this.loginForm.invalid) {
     
      
      this.btnLogin = 'Please validate form';
      return;
    }
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        if (data.isAuthSuccessful) {
          this.getBootInfo();
        } else {
          localStorage.clear();
          this.btnLogin = data.processingStatus.message;
          // this.toastr.info(data.processingStatus.message); // Use the ToastrService to show the message
        }
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
  getBootInfo() {
    this.authService.getBootInfo().subscribe({
      next: (res) => {
        this.set_Cache(res);
        this.router.navigate(['dashboard']);
      },
      error: (res) => {
        console.error('Error fetching boot info:');
      },
    });
  }

  set_Cache(boot: any) {
    localStorage['bootInfo'] = JSON.stringify(boot);
    localStorage.setItem('userName', boot['user'].name);

    this.authService.getuserName();
    this.authService.getUserFname();

    this.btnLogin = 'success';

    this.router.navigate(
      ['admin', boot.allowed_workspaces[0].name.toLowerCase(), 'dashboard'],
      {
        queryParams: { username: boot['user'].name }, // Pass the username as a query parameter
      }
    );
  }
}
