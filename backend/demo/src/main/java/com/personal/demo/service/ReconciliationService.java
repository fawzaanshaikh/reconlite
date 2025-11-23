package com.personal.demo.service;

import com.personal.demo.model.dto.ReconciliationResponse;
import com.personal.demo.model.dto.UpdateStatusRequest;
import com.personal.demo.model.dto.CreateReconciliationRequest;

import java.util.List;
import java.util.UUID;

public interface ReconciliationService {
    
    ReconciliationResponse create(CreateReconciliationRequest request);
    List<ReconciliationResponse> getAll();
    ReconciliationResponse getById(UUID id);
    ReconciliationResponse updateStatus(UUID id, UpdateStatusRequest request);
    void delete(UUID id);

}
