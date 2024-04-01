package com.example.Employer.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Employer.enitty.employeer;
@Service
public interface serviceEmployeer {
    List<employeer> getAllEmployeer();
    employeer addNewEmployeer(employeer employeer);
    employeer getEmployeerById(int id);
    employeer updatEmployeer(int id,employeer employeer);
    String deleteEmployer(int id);
}
