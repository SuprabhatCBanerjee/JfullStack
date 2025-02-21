package com.zidio.taskmanagement.dto;

import java.time.LocalDateTime;
import com.zidio.taskmanagement.entity.Priority;
import com.zidio.taskmanagement.entity.Status;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskDTO {
    private Long id;
    private String title;
    private String description;
    private Status status;
    private Priority priority;
    private Long createdById;
    private Long assignedToId;
    private LocalDateTime deadline;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
