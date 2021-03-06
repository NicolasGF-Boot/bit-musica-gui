import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../servicios/usuarios.service';
import { MensajesService } from '../../servicios/mensajes.service';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.scss'],
})
export class InicioDeSesionComponent implements OnInit {
  usuario;
  formularioSesion: FormGroup;

  constructor(
    private usuariosService: UsuariosService,
    private formBuilder: FormBuilder
  ) {
    this.formularioSesion = this.formBuilder.group({
      correoElectronico: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  iniciarSesion(datos) {
    console.log(datos);
    this.usuariosService.iniciarSesion(datos).subscribe(
      (usuario) => {
        this.usuario = usuario;
        this.usuariosService.guardarLocalStorage(usuario);
      },
      (respuesta) => {
        // console.log(error);
        alert(respuesta.error.mensaje);
      }
    );
  }
}
