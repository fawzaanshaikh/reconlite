package com.personal.demo.controller;

import com.personal.demo.model.dto.*;
import com.personal.demo.service.ReconciliationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/reconciliation")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ReconciliationController {
    
    private final ReconciliationService service;

    @PostMapping("/create")
    public ReconciliationResponse create(@Valid @RequestBody CreateReconciliationRequest request) {
        return service.create(request);
    }

    @GetMapping
    public List<ReconciliationResponse> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ReconciliationResponse getById(@PathVariable UUID id) {
        return service.getById(id);
    }

    @PutMapping("/{id}/status")
    public ReconciliationResponse updateStatus(
            @PathVariable UUID id,
            @RequestBody UpdateStatusRequest request
    ) {
        return service.updateStatus(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        service.delete(id);
    }

}
