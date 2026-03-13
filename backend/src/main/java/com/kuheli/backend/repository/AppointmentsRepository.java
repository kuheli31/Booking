package com.kuheli.backend.repository;

import com.kuheli.backend.model.Appointments;
import com.kuheli.backend.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;

public interface AppointmentsRepository extends JpaRepository<Appointments, Long> {
    boolean existsByDoctorAndDateAndTime(
            Doctor doctor,
            LocalDate date,
            LocalTime time
    );
}