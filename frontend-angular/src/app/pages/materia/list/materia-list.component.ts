import { Component, OnInit } from "@angular/core";
import Materia from "../materia";
import { MateriaService } from "../materia.service";

@Component({
  selector: "app-materia-list",
  templateUrl: "./materia-list.component.html",
  styleUrls: ["./materia-list.component.css"],
})
export class MateriaListComponent implements OnInit {
  constructor(private materiaService: MateriaService) {}

  materias: Materia[] = [];
  ngOnInit() {
    this.findAllMaterias();
  }

  findAllMaterias() {
    this.materiaService
      .findAll()
      .subscribe((response) => (this.materias = response));
  }

  deleteById(id: number): void {
    this.materiaService.deleteById(id).subscribe(() => this.findAllMaterias());
  }
}
