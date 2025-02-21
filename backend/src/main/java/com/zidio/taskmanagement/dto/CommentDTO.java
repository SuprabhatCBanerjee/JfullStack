package com.zidio.taskmanagement.dto;

import java.time.LocalDateTime;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private Long id;
    private Long taskId;
    private Long userId;
    private String commentText;
    private LocalDateTime createdAt;
}
