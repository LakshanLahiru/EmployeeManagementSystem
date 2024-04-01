package com.example.Employer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Employer.enitty.employeer;

public interface employeerRepo extends JpaRepository<employeer,Integer> {
    
}
