package com.kuheli.backend.controller;
import com.kuheli.backend.model.Appointments;
import com.kuheli.backend.model.Availability;
import com.kuheli.backend.repository.AvailabilityRepository;
import com.kuheli.backend.service.AppointmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
public class DoctorController {
    @Autowired
    private AppointmentsService appointmentsService;
    @GetMapping("/appointments")
    public List<Appointments> getAllAppointments()
    {
        return appointmentsService.getAllAppointments();
    }

    @Autowired
    private AvailabilityRepository availabilityRepository;
    @PostMapping("/availability")
    public List<Availability> saveAvailability(@RequestBody List<Availability> availability){
        return availabilityRepository.saveAll(availability);
    }
}
