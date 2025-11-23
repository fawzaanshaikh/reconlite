package com.personal.demo.model.dto;

import lombok.Data;
import java.math.BigDecimal;

@Data
public class CreateReconciliationRequest {
    
    private BigDecimal internalAmount;
    private BigDecimal bankAmount;

}
