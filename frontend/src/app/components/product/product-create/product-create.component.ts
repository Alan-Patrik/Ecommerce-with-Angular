import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateFormService } from '../../shared/template-form.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {

  constructor(
    public formService: TemplateFormService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.formService.form.valid) {
      this.formService.createProduct(this.formService.form.value);
      this.formService.form.reset();
      this.formService.initializeFormGroup();
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
