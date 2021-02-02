package com.atividades.domain.atividade;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.atividades.domain.materia.Materia;
import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "atividades")
@Getter
@Setter
public class Atividade implements Serializable {
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

    @NotNull
    @JoinColumn(name = "materia_id", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Materia materia;

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

    @NotNull
    @Column(name = "data_inicio")
    @Temporal(TemporalType.TIMESTAMP) // yyyy-MM-dd HH:mm:ss
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date data_inicio;

    @NotNull
    @Column(name = "data_final")
    @Temporal(TemporalType.TIMESTAMP) // yyyy-MM-dd HH:mm:ss
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date data_final;

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
