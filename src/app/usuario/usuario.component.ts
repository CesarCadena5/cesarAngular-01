import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      if (params['id'] != null) {
        console.log("El parametro es " + params['id']);
      }
    });
  }

}
