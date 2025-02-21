package com.zidio.taskmanagement.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.zidio.taskmanagement.dto.RoleDTO;
import com.zidio.taskmanagement.entity.Role;
import com.zidio.taskmanagement.mapper.RoleMapper;
import com.zidio.taskmanagement.repository.RoleRepository;
import com.zidio.taskmanagement.service.RoleService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class RoleServiceImpl implements RoleService {
	  private final RoleRepository roleRepository;
	    private final RoleMapper roleMapper;

	@Override
	public RoleDTO createRole(RoleDTO roleDTO) {
		Role role = roleMapper.toEntity(roleDTO);
        Role savedRole = roleRepository.save(role);
        return roleMapper.toDTO(savedRole);
	}

	@Override
	public List<RoleDTO> getAllRoles() {
		return roleRepository.findAll()
                .stream()
                .map(roleMapper::toDTO)
                .collect(Collectors.toList());
	}

}
