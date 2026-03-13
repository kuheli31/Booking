package com.kuheli.backend.service;

import com.kuheli.backend.model.Appointments;
import com.kuheli.backend.repository.AppointmentsRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentsService {

    @Autowired
    private AppointmentsRepository appointmentsRepository;

    public List<Appointments> getAllAppointments() {
        return appointmentsRepository.findAll();
    }
}