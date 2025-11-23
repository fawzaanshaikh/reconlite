package com.personal.demo.model.dto;

import lombok.Data;
import java.math.BigDecimal;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Data
public class CreateReconciliationRequest {
    
    @NotNull
    @Min(0)
    private BigDecimal internalAmount;
    
    @NotNull
    @Min(0)
    private BigDecimal bankAmount;

}
