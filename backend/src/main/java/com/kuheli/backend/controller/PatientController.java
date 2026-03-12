package com.kuheli.backend.controller;
import com.kuheli.backend.model.Records;
import com.kuheli.backend.service.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private RecordService recordService;

    @GetMapping("/{patientId}/records")
    public List<Records> getPatientRecords(@PathVariable Long patientId) {
        return recordService.getRecordsByPatientId(patientId);
    }
}
