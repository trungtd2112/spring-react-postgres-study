package com.lab.spring.backend.controllers;

import com.lab.spring.backend.graphql.inputs.UserInput;
import com.lab.spring.backend.models.User;
import com.lab.spring.backend.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @QueryMapping
    List<User> getUsers() {
        return userService.getUsers();
    }

    @QueryMapping
    User getUserById(@Argument UUID id) {
        return userService.getUserById(id);
    }

    @MutationMapping
    User addUser(@Argument @Valid UserInput userInput) {
        return userService.addUser(userInput);
    }

    @MutationMapping
    User updateUser(@Argument UUID id, @Argument UserInput userInput) {
        return userService.updateUser(id, userInput);
    }

    @MutationMapping
    String deleteUser(@Argument UUID id) {
        return userService.deleteUser(id);
    }
}
