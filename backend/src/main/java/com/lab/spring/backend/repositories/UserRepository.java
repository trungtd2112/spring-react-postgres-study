package com.lab.spring.backend.repositories;

import com.lab.spring.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findById(UUID id);

    User findByEmail(String email);
}
