package com.zidio.taskmanagement.service;

import com.zidio.taskmanagement.dto.TaskDTO;
import java.util.List;

public interface TaskService {
    TaskDTO createTask(TaskDTO taskDTO);
    List<TaskDTO> getAllTasks();
}
