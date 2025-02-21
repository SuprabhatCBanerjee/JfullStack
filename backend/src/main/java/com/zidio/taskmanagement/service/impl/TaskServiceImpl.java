package com.zidio.taskmanagement.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import com.zidio.taskmanagement.dto.TaskDTO;
import com.zidio.taskmanagement.entity.Task;
import com.zidio.taskmanagement.entity.User;
import com.zidio.taskmanagement.repository.TaskRepository;
import com.zidio.taskmanagement.repository.UserRepository;
import com.zidio.taskmanagement.service.TaskService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    @Override
    public TaskDTO createTask(TaskDTO taskDTO) {
        Optional<User> createdByUser = userRepository.findById(taskDTO.getCreatedById());
        Optional<User> assignedToUser = userRepository.findById(taskDTO.getAssignedToId());

        if (createdByUser.isEmpty()) {
            throw new RuntimeException("Created by user not found");
        }

        Task task = new Task();
        task.setTitle(taskDTO.getTitle());
        task.setDescription(taskDTO.getDescription());
        task.setStatus(taskDTO.getStatus());
        task.setPriority(taskDTO.getPriority());
        task.setCreatedBy(createdByUser.get());
        task.setAssignedTo(assignedToUser.orElse(null)); // AssignedTo can be null
        task.setDeadline(taskDTO.getDeadline());

        Task savedTask = taskRepository.save(task);

        return new TaskDTO(savedTask.getId(), savedTask.getTitle(), savedTask.getDescription(), savedTask.getStatus(),
                savedTask.getPriority(), savedTask.getCreatedBy().getId(),
                savedTask.getAssignedTo() != null ? savedTask.getAssignedTo().getId() : null,
                savedTask.getDeadline(), savedTask.getCreatedAt(), savedTask.getUpdatedAt());
    }

    @Override
    public List<TaskDTO> getAllTasks() {
        return taskRepository.findAll().stream()
                .map(task -> new TaskDTO(task.getId(), task.getTitle(), task.getDescription(), task.getStatus(),
                        task.getPriority(), task.getCreatedBy().getId(),
                        task.getAssignedTo() != null ? task.getAssignedTo().getId() : null,
                        task.getDeadline(), task.getCreatedAt(), task.getUpdatedAt()))
                .collect(Collectors.toList());
    }
}
