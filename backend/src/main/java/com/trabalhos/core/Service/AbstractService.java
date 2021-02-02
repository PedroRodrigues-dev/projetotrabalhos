package com.trabalhos.core.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.validation.Errors;

import java.util.List;

public class AbstractService<T> implements IService<T> {
    @Autowired
    protected JpaRepository<T, Long> repository;

    public T findById(long id) {
        return repository.findById(id).get();
    }

    public List<T> findAll() {
        return repository.findAll();
    }

    public T save(T object, Errors errors) {
        return repository.save(object);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }

}
