package com.zidio.taskmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.zidio.taskmanagement.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
