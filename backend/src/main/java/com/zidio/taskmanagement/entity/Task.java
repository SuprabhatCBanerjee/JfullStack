package com.zidio.taskmanagement.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tasks")
public class Task {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status; // Enum for task status (Pending, In Progress, Completed)

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Priority priority; // Enum for task priority (Low, Medium, High)

    @ManyToOne
    @JoinColumn(name = "created_by", nullable = false) // Foreign key to User table
    private User createdBy;

    @ManyToOne
    @JoinColumn(name = "assigned_to") // Foreign key to User table (nullable)
    private User assignedTo;

    @Column(nullable = false)
    private LocalDateTime deadline;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
