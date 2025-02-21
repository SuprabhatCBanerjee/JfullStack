package com.zidio.taskmanagement.mapper;

import org.springframework.stereotype.Component;
import com.zidio.taskmanagement.dto.UserDTO;
import com.zidio.taskmanagement.entity.Role;
import com.zidio.taskmanagement.entity.User;

import java.time.LocalDateTime;

@Component
public class UserMapper {
    
    public User toEntity(UserDTO dto, Role role) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());  // Hashing to be handled in Service
        user.setRole(role);
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setCreatedAt(LocalDateTime.now());
        return user;
    }
    
    public UserDTO toDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setUsername(user.getUsername());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setRoleId(user.getRole().getId());
        return dto;
    }
}
