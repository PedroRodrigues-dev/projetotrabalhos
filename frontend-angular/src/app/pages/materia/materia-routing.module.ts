import { MateriaListComponent } from "./list/materia-list.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MateriaFormComponent } from './form/materia-form.component';

const routes: Routes = [
  {
    path: "",
    component: MateriaListComponent,
  },
  {
    path: "cadastrar",
    component: MateriaFormComponent,
  },
  {
    path: 'alterar/:id',
    component: MateriaFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriaRoutingModule { }
