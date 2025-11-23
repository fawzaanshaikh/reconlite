package com.personal.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

import com.personal.demo.model.entity.Reconciliation;

public interface ReconciliationRepository extends JpaRepository<Reconciliation, UUID> {
    
}
