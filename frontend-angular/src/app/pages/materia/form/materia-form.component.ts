import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../materia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Materia from '../materia';


@Component({
  selector: 'app-materia-form',
  templateUrl: './materia-form.component.html',
  styleUrls: ['./materia-form.component.css']
})
export class MateriaFormComponent implements OnInit {

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private materiaService: MateriaService,
    private activatedRoute: ActivatedRoute
  ) { }

  materiaForm: FormGroup;
  action: string;

  ngOnInit(): void {
    this.createForm();
    this.action = this.activatedRoute.snapshot.url[0].path;

    if (this.action == 'alterar') {
      this.setValue();
    }
  }

  createForm(): void {
    this.materiaForm = this.builder.group({
      id: null,
      materia: [null, [Validators.required, Validators.maxLength(120)]],
      professor: [null, [Validators.required, Validators.maxLength(120)]],
    });
  }

  setValue() {
    const id = this.activatedRoute.snapshot.url[1].path;
    this.materiaService
      .findById(Number(id))
      .subscribe((response) => this.materiaForm.patchValue(response));
  }

  onSave(value: Materia): void {
    if (this.materiaForm.invalid) {
      return;
    }

    console.log(value);
    this.materiaService
      .save(value)
      .subscribe((response) => this.router.navigate(['materia']));
  }

  onCancel(): void {
    this.router.navigate(['materia']);
  }

}
