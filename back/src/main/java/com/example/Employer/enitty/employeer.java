package com.example.Employer.enitty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class employeer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    
    private String firstName;
    private String lastName;
    @Column(unique = true)
    private String email;

    
}
