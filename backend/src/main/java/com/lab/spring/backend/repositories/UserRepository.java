package com.lab.spring.backend.repositories;

import com.lab.spring.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
