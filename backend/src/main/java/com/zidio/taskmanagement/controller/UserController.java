package com.zidio.taskmanagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zidio.taskmanagement.dto.UserDTO;
import com.zidio.taskmanagement.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	 private final UserService userService;

	    public UserController(UserService userService) {
	        this.userService = userService;
	    }

	    @PostMapping("/register")
	    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO) {
	        return ResponseEntity.ok(userService.registerUser(userDTO));
	    }

}
