package com.personal.demo.service.impl;

import com.personal.demo.exception.ResourceNotFoundException;
import com.personal.demo.model.dto.*;
import com.personal.demo.model.entity.Reconciliation;
import com.personal.demo.model.enums.ReconciliationStatus;
import com.personal.demo.repository.ReconciliationRepository;
import com.personal.demo.service.ReconciliationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ReconciliationServiceImpl implements ReconciliationService {
    
    private final ReconciliationRepository repository;

    @Override
    public ReconciliationResponse create(CreateReconciliationRequest request) {

        ReconciliationStatus status =
            request.getInternalAmount().compareTo(request.getBankAmount()) == 0
                ? ReconciliationStatus.MATCHED
                : ReconciliationStatus.MISMATCH;

        Reconciliation rec = Reconciliation.builder()
                .internalAmount(request.getInternalAmount())
                .bankAmount(request.getBankAmount())
                .status(status)
                .build();

        repository.save(rec);

        return toResponse(rec);
    }

    @Override
    public List<ReconciliationResponse> getAll() {
        return repository.findAll().stream()
                .map(this::toResponse)
                .toList();
    }

    @Override
    public ReconciliationResponse updateStatus(UUID id, UpdateStatusRequest request) {
        Reconciliation rec = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Reconciliation not found"));

        rec.setStatus(request.getStatus());
        repository.save(rec);

        return toResponse(rec);
    }

    private ReconciliationResponse toResponse(Reconciliation rec) {
        return ReconciliationResponse.builder()
                .id(rec.getId())
                .internalAmount(rec.getInternalAmount())
                .bankAmount(rec.getBankAmount())
                .status(rec.getStatus())
                .build();
    }

}
