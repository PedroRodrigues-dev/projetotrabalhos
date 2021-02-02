package com.trabalhos.domain.trabalho;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "trabalhos")
@Getter
@Setter
public class Trabalho implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @NotEmpty
    @NotBlank
    @Size(max = 13)
    @Column(name = "dia")
    private String dia;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "materia")
    private String materia;

    @NotNull
    @Column(name = "ciclo")
    private Integer ciclo;

    @NotNull
    @Column(name = "semana")
    private Integer semana;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "atividade")
    private String atividade;

    @NotEmpty
    @NotBlank
    @Size(max = 18)
    @Column(name = "data_inicio")
    private String data_inicio;

    @NotEmpty
    @NotBlank
    @Size(max = 18)
    @Column(name = "data_final")
    private String data_final;

    @NotEmpty
    @NotBlank
    @Size(max = 10)
    @Column(name = "status")
    private String status;

    @NotNull
    @Column(name = "envio")
    private boolean envio;

    @NotNull
    @Column(name = "apresentar")
    private boolean apresentar;
}
