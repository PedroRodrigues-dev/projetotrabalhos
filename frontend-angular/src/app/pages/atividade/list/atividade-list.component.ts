import { Component, OnInit } from "@angular/core";
import { AtividadeService } from "../atividade.service";
import Atividade from "../atividade";

@Component({
  selector: "app-atividade-list",
  templateUrl: "./atividade-list.component.html",
  styleUrls: ["./atividade-list.component.css"],
})
export class AtividadeListComponent implements OnInit {
  constructor(private atividadeService: AtividadeService) {}

  atividades: Atividade[] = [];
  ngOnInit() {
    this.findAllAtividades();
  }
  findAllAtividades() {
    this.atividadeService
      .findAll()
      .subscribe((response) => {this.atividades = response.map(item => ({...item, envio: item.envio ? 'Sim' : 'Não', apresentar: item.apresentar ? 'Sim' : 'Não' }))});
  }

  deleteById(id: number): void {
    this.atividadeService
      .deleteById(id)
      .subscribe(() => this.findAllAtividades());
  }
}
