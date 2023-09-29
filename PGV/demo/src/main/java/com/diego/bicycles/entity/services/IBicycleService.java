package com.diego.bicycles.entity.services;

import java.util.List;

import com.diego.bicycles.entity.models.Bicycle;

public interface IBicycleService {
	
	public Bicycle get(long id);
	public List<Bicycle> getAll();
	public void post(Bicycle bicycle);
	public void put(Bicycle bicycle, long id);
	public void delete(long id);

}
