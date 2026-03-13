package com.kuheli.backend.controller;

import com.kuheli.backend.model.Appointments;
import com.kuheli.backend.model.Availability;
import com.kuheli.backend.repository.AppointmentsRepository;
import com.kuheli.backend.repository.AvailabilityRepository;
import com.kuheli.backend.service.AppointmentsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
@CrossOrigin
public class DoctorController {

    @Autowired
    private AppointmentsService appointmentsService;

    @Autowired
    private AvailabilityRepository availabilityRepository;

    @Autowired
    private AppointmentsRepository appointmentRepository;


    /* -------- GET ALL APPOINTMENTS -------- */

    @GetMapping("/appointments")
    public List<Appointments> getAllAppointments() {
        return appointmentsService.getAllAppointments();
    }


    /* -------- SAVE AVAILABILITY -------- */

    @PostMapping("/availability")
    public List<Availability> saveAvailability(@RequestBody List<Availability> availability) {
        return availabilityRepository.saveAll(availability);
    }


    /* -------- RESCHEDULE APPOINTMENT -------- */

    @PutMapping("/appointments/{id}")
    public Appointments rescheduleAppointment(
            @PathVariable Long id,
            @RequestBody Appointments updatedAppointment) {

        Appointments appointment = appointmentRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        appointment.setDate(updatedAppointment.getDate());
        appointment.setTime(updatedAppointment.getTime());

        return appointmentRepository.save(appointment);
    }

}