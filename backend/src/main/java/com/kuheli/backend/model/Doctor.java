package com.kuheli.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String specialization;
    private String experience;
    private String profilePicture;
    private String gender;
    private String address;
    private Double ratings;

    @ElementCollection
    @CollectionTable(
            name = "doctor_patient_ids",
            joinColumns = @JoinColumn(name = "doctor_id")
    )
    @Column(name = "patient_id")
    private List<Long> patientIds;
}