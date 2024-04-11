import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto1.component.html',
  styleUrl: './reto1.component.css'
})
export class Reto1Component {
  email:string = "";
  password:string = "";
  repeatPassword:string = "";

  validPassword(){
    if(this.password === this.repeatPassword){
      alert("Registrado con éxito.")
    }else{
      alert("Las contraseñas no coinciden.")
    }
  }
}
