package com.atividades.domain.materia;

import com.atividades.core.Controller.AbstractController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/materia")
public class MateriaController extends AbstractController<Materia> {

}
