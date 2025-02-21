package com.zidio.taskmanagement.mapper;

import org.springframework.stereotype.Component;

import com.zidio.taskmanagement.dto.RoleDTO;
import com.zidio.taskmanagement.entity.Role;

@Component
public class RoleMapper {
	public Role toEntity(RoleDTO roleDTO) {
        Role role = new Role();
        role.setName(roleDTO.getName());
        role.setDescription(roleDTO.getDescription());
        return role;
    }

    public RoleDTO toDTO(Role role) {
        RoleDTO dto = new RoleDTO();
        dto.setName(role.getName());
        dto.setDescription(role.getDescription());
        return dto;
    }
	

}
