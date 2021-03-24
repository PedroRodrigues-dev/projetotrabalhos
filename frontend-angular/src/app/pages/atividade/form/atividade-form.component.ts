import { Component, OnInit } from "@angular/core";
import { AtividadeService } from "../atividade.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MateriaService } from "../../materia/materia.service";
import Materia from "../../materia/materia";
import Atividade from "../../atividade/atividade";

export interface Dia {
  value: string;
  viewValue: string;
}

export interface Status {
  value: string;
  viewValue: string;
}

export interface Booleano {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-atividade-form",
  templateUrl: "./atividade-form.component.html",
  styleUrls: ["./atividade-form.component.css"],
})
export class AtividadeFormComponent implements OnInit {
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private materiaService: MateriaService,
    private activatedRoute: ActivatedRoute,
    private atividadeService: AtividadeService
  ) {}

  dias: Dia[] = [
    { value: "Segunda-Feira", viewValue: "Segunda-Feira" },
    { value: "Terça-Feira", viewValue: "Terça-Feira" },
    { value: "Quarta-Feira", viewValue: "Quarta-Feira" },
    { value: "Quinta-Feira", viewValue: "Quinta-Feira" },
    { value: "Sexta-Feira", viewValue: "Sexta-Feira" },
    { value: "Sabado", viewValue: "Sabado" },
    { value: "Domingo", viewValue: "Domingo" },
  ];

  status: Status[] = [
    { value: "Pendente", viewValue: "Pendente" },
    { value: "Realizado", viewValue: "Realizado" },
    { value: "Abandonado", viewValue: "Abandonado" },
  ];

  booleanos: Booleano[] = [
    { value: "true", viewValue: "Sim" },
    { value: "false", viewValue: "Não" },
  ];

  atividadeForm: FormGroup;
  materias: Materia[] = [];
  action: string;

  ngOnInit(): void {
    this.createForm();
    this.findAllMaterias();
    this.action = this.activatedRoute.snapshot.url[0].path;

    if (this.action == "alterar") {
      this.setValue();
    }
  }

  createForm(): void {
    this.atividadeForm = this.builder.group({
      id: null,
      dia: [null, [Validators.required, Validators.maxLength(13)]],
      materia: [null, Validators.required],
      ciclo: [null, [Validators.required, Validators.maxLength(2)]],
      semana: [null, [Validators.required, Validators.maxLength(2)]],
      atividade: [null, [Validators.required, Validators.maxLength(120)]],
      horario_inicio: [null, Validators.required],
      horario_final: [null, Validators.required],
      data_inicio: [null, Validators.required],
      data_final: [null, Validators.required],
      status: [null, [Validators.required, Validators.maxLength(10)]],
      envio: [null, Validators.required],
      apresentar: [null, Validators.required],
    });
  }

  findAllMaterias() {
    this.materiaService.findAll().subscribe((response) => {
      this.materias = response;
      if (this.action == "alterar") {
        this.setValue();
      }
    });
  }

  onlyNumbersCiclo(event): void {
    const { value } = event.target;
    this.atividadeForm.get("ciclo").setValue(value.replace(/\D/g, ""));
  }

  onlyNumbersSemana(event): void {
    const { value } = event.target;
    this.atividadeForm.get("semana").setValue(value.replace(/\D/g, ""));
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path;
    this.atividadeService
      .findById(Number(id))
      .subscribe((response) => this.atividadeForm.patchValue(response));
  }

  onSave(value: Atividade): void {
    if (this.atividadeForm.invalid) {
      return;
    }

    console.log(value);
    this.atividadeService
      .save(value)
      .subscribe((response) => this.router.navigate(["atividade"]));
  }

  onCancel(): void {
    this.router.navigate(["atividade"]);
  }
}
