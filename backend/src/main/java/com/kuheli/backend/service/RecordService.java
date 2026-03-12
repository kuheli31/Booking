package com.kuheli.backend.service;

import com.kuheli.backend.model.Records;
import com.kuheli.backend.repository.RecordRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecordService {
    @Autowired
    private RecordRepo recordRepo;

    public List<Records> getRecordsByPatientId(Long patientId) {
        return recordRepo.findByPatientId(patientId);
    }
}
