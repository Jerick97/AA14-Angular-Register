import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  correcto : boolean = false;
  public formRegister !: FormGroup;
  public usuarios : any[] = [];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      dni: ['', [
        Validators.required,
        Validators.pattern(/^\d{8}$/) //Validar el ingreso de solo 8 dígitos numéricos
      ]],
      civil: ['', [
        Validators.required
      ]],
    })
  }
  send(): any{
    this.usuarios.push(this.formRegister.value);

    //Después de 3 Segundos, Reinicia el Form
    setTimeout(() => {
      this.correcto = false;
      this.formRegister.get('civil')?.setValue("");
      this.formRegister.reset();
      
    }, 3000);

    this.correcto = true;
  }
}
