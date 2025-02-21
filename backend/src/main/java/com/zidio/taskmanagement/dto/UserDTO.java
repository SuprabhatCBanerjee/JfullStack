package com.zidio.taskmanagement.dto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String username;
    private String password;
    private Long roleId;
    private String firstName;
    private String lastName;
    private String email;
}