package com.personal.demo.model.dto;

import com.personal.demo.model.enums.ReconciliationStatus;

import lombok.Data;

@Data
public class UpdateStatusRequest {
    
    private ReconciliationStatus status;

}
