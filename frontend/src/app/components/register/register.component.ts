import { Component, OnInit } from '@angular/core';
import { TemplateFormService } from '../shared/template-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  
  constructor(public formService: TemplateFormService) {}

  ngOnInit(): void {}

  onSubmitSigIn() {
    if (this.formService.formLogin.valid) {
      this.formService.signIn(this.formService.formLogin.value);
    }
  }

  onSubmitSignUp() {
    if (this.formService.formLogin.valid) {
      this.formService.signUp(this.formService.formLogin.value);
    }
  }
}
