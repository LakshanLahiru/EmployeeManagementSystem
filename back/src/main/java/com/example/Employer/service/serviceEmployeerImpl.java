package com.example.Employer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Employer.enitty.employeer;
import com.example.Employer.repository.employeerRepo;

@Service
public class serviceEmployeerImpl implements serviceEmployeer {
    @Autowired
    private  employeerRepo employeerRepo;

    @Override
    public List<employeer> getAllEmployeer(){
            return employeerRepo.findAll();

    }
    @Override 
    public employeer addNewEmployeer(employeer employeer){
        return employeerRepo.save(employeer);
    }
    @Override
    public employeer getEmployeerById(int id){
        return employeerRepo.findById(id).orElse(null);
    }
    @Override
    public employeer updatEmployeer(int id,employeer employeer){
        employeer exitone  = employeerRepo.findById(id).orElse(null);
        if (exitone !=null){
            exitone.setFirstName(employeer.getFirstName());
            exitone.setEmail(employeer.getEmail());
            exitone.setLastName(employeer.getLastName());
            return employeerRepo.save(exitone);
        }else{
            return null;
        }
    }
    public  String deleteEmployer(int id){
        
        employeerRepo.deleteById(id);
        return "Deleted";
    }
}
