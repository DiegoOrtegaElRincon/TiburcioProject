package com.diego.bicycles.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.diego.bicycles.entity.models.Bicycle;

public interface IBicycleDao extends CrudRepository<Bicycle, Long>{

}
