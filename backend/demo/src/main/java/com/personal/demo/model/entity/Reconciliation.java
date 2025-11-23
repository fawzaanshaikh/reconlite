package com.personal.demo.model.entity;
import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

import com.personal.demo.model.enums.ReconciliationStatus;


@Entity
@Table(name = "reconciliation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reconciliation {
    
    @Id
    @GeneratedValue
    private UUID id;

    private BigDecimal internalAmount;
    private BigDecimal bankAmount;

    @Enumerated(EnumType.STRING)
    private ReconciliationStatus status;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

}
