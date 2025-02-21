package com.zidio.taskmanagement.service.impl;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.zidio.taskmanagement.dto.UserDTO;
import com.zidio.taskmanagement.entity.Role;
import com.zidio.taskmanagement.entity.User;
import com.zidio.taskmanagement.mapper.UserMapper;
import com.zidio.taskmanagement.repository.RoleRepository;
import com.zidio.taskmanagement.repository.UserRepository;
import com.zidio.taskmanagement.service.UserService;

import lombok.AllArgsConstructor;


@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {
	 private final UserRepository userRepository;
	    private final RoleRepository roleRepository;
	    private final UserMapper userMapper;
		@Override
		public UserDTO registerUser(UserDTO userDTO) {
	        Optional<Role> roleOpt = roleRepository.findById(userDTO.getRoleId());
	        if (roleOpt.isEmpty()) {
	            throw new RuntimeException("Role not found");
	        }

	        User user = userMapper.toEntity(userDTO, roleOpt.get());
	        // No password encryption
	        User savedUser = userRepository.save(user);
	        return userMapper.toDTO(savedUser);
	    }
	}


