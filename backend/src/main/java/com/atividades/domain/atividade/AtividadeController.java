package com.atividades.domain.atividade;

import com.atividades.core.Controller.AbstractController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/atividade")
public class AtividadeController extends AbstractController<Atividade> {

}
