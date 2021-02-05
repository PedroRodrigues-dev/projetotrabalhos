import { AtividadeListComponent } from "./list/atividade-list.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AtividadeFormComponent } from './form/atividade-form.component';

const routes: Routes = [
  {
    path: "",
    component: AtividadeListComponent,
  },
  {
    path: "cadastrar",
    component: AtividadeFormComponent,
  },
  {
    path: 'alterar/:id',
    component: AtividadeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtividadeRoutingModule { }
