package com.atividades.domain.materia;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.atividades.domain.atividade.Atividade;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "materias")
@Getter
@Setter
public class Materia implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private long id;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "materia")
    private String materia;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "professor")
    private String professor;

    @JsonIgnore
    @OneToMany(mappedBy = "materia", cascade = CascadeType.ALL)
    private List<Atividade> atividades;

}
