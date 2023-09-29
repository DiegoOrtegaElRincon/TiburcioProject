package com.diego.bicycles.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.diego.bicycles.entity.models.Bicycle;
import com.diego.bicycles.entity.services.IBicycleService;

@RestController
@CrossOrigin(origins = "*")
public class BicycleController {
	
	@Autowired
	IBicycleService bicycleService;
	
	@GetMapping("/bicycles")
	public List<Bicycle> getAllBicycles(){
		return bicycleService.getAll();
	}
	
	@GetMapping("/bicycles/{id}")
	public Bicycle getOne(@PathVariable(value ="id") long id){
		return bicycleService.get(id);
	}
	
	@PostMapping("/bicycles")
	public void post(Bicycle bicycle) {
		bicycleService.post(bicycle);
	}
	
	@PutMapping("/bicycles/{id}")
	public void put(Bicycle bicycle, @PathVariable(value = "id") long id) {
		bicycleService.put(bicycle, id);
	}
	
	@DeleteMapping("/bicycles/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		bicycleService.delete(id);
	}
}
