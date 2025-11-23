package com.personal.demo.controller;

import com.personal.demo.model.dto.*;
import com.personal.demo.service.ReconciliationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/reconciliation")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ReconciliationController {
    
    private final ReconciliationService service;

    @PostMapping
    public ReconciliationResponse create(@RequestBody CreateReconciliationRequest request) {
        return service.create(request);
    }

    @GetMapping
    public List<ReconciliationResponse> getAll() {
        return service.getAll();
    }

    @PutMapping("/{id}/status")
    public ReconciliationResponse updateStatus(
            @PathVariable UUID id,
            @RequestBody UpdateStatusRequest request
    ) {
        return service.updateStatus(id, request);
    }

}
