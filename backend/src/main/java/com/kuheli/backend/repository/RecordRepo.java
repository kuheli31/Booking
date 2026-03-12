package com.kuheli.backend.repository;

import com.kuheli.backend.model.Records;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecordRepo extends JpaRepository<Records , Long> {
    List<Records> findByPatientId(Long patientId);
}
