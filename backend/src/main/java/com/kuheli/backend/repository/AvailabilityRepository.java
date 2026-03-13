package com.kuheli.backend.repository;

import com.kuheli.backend.model.Availability;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AvailabilityRepository extends JpaRepository<Availability, Long> {
}