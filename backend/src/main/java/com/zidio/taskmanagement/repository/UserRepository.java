package com.zidio.taskmanagement.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.zidio.taskmanagement.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}