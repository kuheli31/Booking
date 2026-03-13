package com.kuheli.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"doctor_id","date","time"})
        }
)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Availability {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    private LocalDate date;

    private LocalTime time;

    private boolean available;
}