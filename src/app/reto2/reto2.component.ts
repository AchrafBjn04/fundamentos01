import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reto2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reto2.component.html',
  styleUrl: './reto2.component.css'
})
export class Reto2Component {
  descripcion:string = "";
  codigo:number = 0;
  precioCosto:number = 0;
  precioVenta:number = 0;
  stockIdeal:number = 0;

  darAlta(){
    if(this.precioCosto > 0 && this.precioVenta > 0 && this.stockIdeal > 0){
      alert("Producto dado de alta con éxito.")
    }else{
      alert("Error al intentar dar de alta al producto")
    }
  }
}
