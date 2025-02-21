package com.zidio.taskmanagement.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.zidio.taskmanagement.dto.CommentDTO;
import com.zidio.taskmanagement.entity.Comment;
import com.zidio.taskmanagement.entity.Task;
import com.zidio.taskmanagement.entity.User;
import com.zidio.taskmanagement.repository.CommentRepository;
import com.zidio.taskmanagement.repository.TaskRepository;
import com.zidio.taskmanagement.repository.UserRepository;
import com.zidio.taskmanagement.service.CommentService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    @Override
    public CommentDTO addComment(CommentDTO commentDTO) {
        Task task = taskRepository.findById(commentDTO.getTaskId())
                .orElseThrow(() -> new RuntimeException("Task not found"));

        User user = userRepository.findById(commentDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Comment comment = new Comment();
        comment.setTask(task);
        comment.setUser(user);
        comment.setCommentText(commentDTO.getCommentText());

        Comment savedComment = commentRepository.save(comment);

        return new CommentDTO(
                savedComment.getId(),
                savedComment.getTask().getId(),
                savedComment.getUser().getId(),
                savedComment.getCommentText(),
                savedComment.getCreatedAt()
        );
    }

    @Override
    public List<CommentDTO> getCommentsByTaskId(Long taskId) {
        List<Comment> comments = commentRepository.findByTaskId(taskId);
        return comments.stream()
                .map(comment -> new CommentDTO(
                        comment.getId(),
                        comment.getTask().getId(),
                        comment.getUser().getId(),
                        comment.getCommentText(),
                        comment.getCreatedAt()))
                .collect(Collectors.toList());
    }
}
