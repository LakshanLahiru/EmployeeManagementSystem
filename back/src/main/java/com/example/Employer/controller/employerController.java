package com.example.Employer.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import com.example.Employer.enitty.employeer;
import com.example.Employer.service.serviceEmployeer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@CrossOrigin
public class employerController {
    @Autowired
    private serviceEmployeer employeerService;


    //search all 
    @GetMapping("/employeers")
    public List<employeer> getAllEmployeer(){
        return employeerService.getAllEmployeer();
    }

    // add new employeer
    @PostMapping("/addEmployeer")
    public employeer addEmployeer(@RequestBody employeer employeer){
        return employeerService.addNewEmployeer(employeer);
    }

    // get employeer byID
    @GetMapping("/employer/{id}")
    public employeer getEmployerById(@PathVariable int id){
        employeer getEmployeer = employeerService.getEmployeerById(id);
            if (getEmployeer != null){
                return getEmployeer;
            }else{
                return null;
            }
    }
    //Update employer
    @PutMapping("/update/{id}")
    public employeer updatEmployeer(@PathVariable int id,@RequestBody employeer employeer){
        employeer updateone = employeerService.updatEmployeer(id, employeer);
        if (updateone != null){
            return updateone;
        }else{
            return null;
        }
    }
    //Delete employer
    @DeleteMapping("/delete/{id}")
    public String deleteEmployeer(@PathVariable int id){
        return employeerService.deleteEmployer(id);
    }
    
}
