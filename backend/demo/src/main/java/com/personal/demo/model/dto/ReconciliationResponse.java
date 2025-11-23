package com.personal.demo.model.dto;

import java.math.BigDecimal;
import lombok.Builder;
import lombok.Data;
import java.util.UUID;

import com.personal.demo.model.enums.ReconciliationStatus;

@Data
@Builder
public class ReconciliationResponse {
    
    private UUID id;
    private BigDecimal internalAmount;
    private BigDecimal bankAmount;
    private ReconciliationStatus status;

}
