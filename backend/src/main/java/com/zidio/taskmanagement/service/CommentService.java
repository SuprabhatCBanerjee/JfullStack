package com.zidio.taskmanagement.service;

import java.util.List;
import com.zidio.taskmanagement.dto.CommentDTO;

public interface CommentService {
    CommentDTO addComment(CommentDTO commentDTO);
    List<CommentDTO> getCommentsByTaskId(Long taskId);
}

