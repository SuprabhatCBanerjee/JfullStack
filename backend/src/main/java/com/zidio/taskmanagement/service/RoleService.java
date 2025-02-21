package com.zidio.taskmanagement.service;

import java.util.List;

import com.zidio.taskmanagement.dto.RoleDTO;

public interface RoleService {
	RoleDTO createRole(RoleDTO roleDTO);
    List<RoleDTO> getAllRoles();

}
