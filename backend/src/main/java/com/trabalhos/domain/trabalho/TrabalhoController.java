package com.trabalhos.domain.trabalho;

import com.trabalhos.core.Controller.AbstractController;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trabalho")
public class TrabalhoController extends AbstractController<Trabalho> {

}
