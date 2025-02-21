package com.zidio.taskmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zidio.taskmanagement.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}